<template>
  <div v-on-clickaway="handleEditEnd">
    <Moveable
      v-bind="moveable"
      @dragStart="handleDragStart"
      @dragEnd="handleDragEnd"
      @drag="handleDrag"
      :class="[isEditing ? 'is-editing' : '']"
      :style="transform"
      class="Shape"
    >
      <svg
        @click="handleEditStart"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
      >
        <circle v-if="currentShape === 'circle'" cx="50" cy="50" r="40" />
        <path v-else-if="currentShape === 'triangle'" d="M4 96 H96 L50 4Z" />
        <path
          v-else-if="currentShape === 'rectangle'"
          d="M2 2 h96 v96 h-96 v-96z"
        />
      </svg>
      <debug-info :visible="false" :dump="value" />
    </Moveable>

    <portal v-if="isEditing" to="context-menu">
      <context-menu ref="contextMenu" :visible="isEditing">
        <shape-picker :value="value.shape" @input="handleUpdateShape" />
        <delete-button :callback="deleteShape" />
      </context-menu>
    </portal>
  </div>
</template>

<script>
// https://www.npmjs.com/package/vue-clickaway
import { mixin as clickaway } from 'vue-clickaway'
// https://vuejsexamples.com/a-vue-component-that-create-moveable-and-resizable/
import Moveable from 'vue-moveable'

import { SHAPES } from '~/store/shapes'
import positionAwareMixin from '~/mixins/positionAware'

export default {
  components: { Moveable },
  mixins: [clickaway, positionAwareMixin],
  props: {
    value: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    x: 0,
    y: 0,
    isEditing: false,
    isDraging: false,
    shapeIndex: 0,
    moveable: {
      draggable: true,
      throttleDrag: 0
    }
  }),
  computed: {
    transform() {
      const x = (this.isDraging ? this.x : this.value.x) + this.deltaX
      const y = (this.isDraging ? this.y : this.value.y) + this.deltaY

      return {
        transform: `translate(${x}px, ${y}px)`
      }
    },
    currentShape() {
      return SHAPES[this.value.shape]
    }
  },
  methods: {
    handleDragStart() {
      this.x = this.value.x
      this.y = this.value.y
      this.isDraging = true
      this.$emit('contextOpen')
    },
    handleDragEnd() {
      this.isDraging = false
    },
    handleUpdateShape(shape) {
      const { uuid } = this.value
      this.$store.dispatch('shapes/updateShape', { uuid, shape })
    },
    handleEditStart() {
      this.isEditing = true
      this.$emit('contextOpen')
    },
    handleEditEnd(e) {
      if (
        this.$refs.contextMenu &&
        e.target.closest('.Context-menu') === this.$refs.contextMenu.$el
      ) {
        return
      }

      this.isEditing = false
    },
    handleDrag({ transform, beforeDelta, beforeDist, delta, dist }) {
      const x = this.x + delta[0] / this.zoomFactor
      const y = this.y + delta[1] / this.zoomFactor

      this.x = x
      this.y = y
      const { uuid } = this.value
      this.$store.dispatch('shapes/updatePosition', { uuid, x, y })
    },
    deleteShape(id) {
      this.$store.dispatch('shapes/delete', {
        uuid: this.value.uuid,
        deleted: true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
$size: 250px;
$button-size: 22px;

* {
  box-sizing: border-box;
}

.Shape {
  position: absolute;
  width: $size;
  height: $size;
  transition: box-shadow 300ms ease-in-out;

  &--inner {
    padding: 20px;
    height: 100%;
    background-color: #fefac7;
  }

  &.is-editing > svg > * {
    stroke: #3985f7;
  }

  rect,
  path,
  circle {
    stroke: black;
    stroke-width: 3;
    fill: transparent;
  }

  &:hover .icon,
  &:hover .icon > img {
    opacity: 1;
  }

  @at-root {
    .icon,
    .icon > img {
      display: inline-block;
      opacity: 0;
      transition: opacity 300ms ease-in-out;
    }
  }
}
</style>
