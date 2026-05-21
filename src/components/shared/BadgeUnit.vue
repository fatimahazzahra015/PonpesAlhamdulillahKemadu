<template>
  <span :class="`badge-unit badge-unit--${unitKey}`">{{ unitLabel }}</span>
</template>

<script setup>
const unitMap = {
  Ponpes:   { key: 'Ponpes',   label: 'Ponpes' },
  MI:        { key: 'mi',        label: 'MI' },
  SMK:       { key: 'smk',       label: 'SMK' },
  Madin:     { key: 'madin',     label: 'Madin' },
  Pesantren: { key: 'pesantren', label: 'Pesantren' },
}

const props = defineProps({
  unit: { type: String, required: true },
})

import { computed } from 'vue'
const unitKey = computed(() => unitMap[props.unit]?.key || 'Ponpes')
const unitLabel = computed(() => unitMap[props.unit]?.label || props.unit)
</script>
