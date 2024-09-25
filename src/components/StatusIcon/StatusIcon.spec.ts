import { mount, shallowMount } from '@vue/test-utils'
import StatusIcon from './StatusIcon.vue'
import { expect, describe, it } from 'vitest'
import { vuetify } from '../../vuetify.config'

global.ResizeObserver = require('resize-observer-polyfill')

describe('StatusIcon', () => {
  it('if props.status is true v-icon has to render props.iconTrue and class text-success', () => {
    const wrapper = mount(StatusIcon, {
      props: {
        status: true,
        iconTrue: '$show',
        iconFalse: '$hide'
      },
      global: {
        components: {
          StatusIcon
        },
        plugins: [vuetify]
      }
    })
    const icon = wrapper.find('[data-testid="StatusIconVIcon"]')
    expect(icon.exists()).toBeTruthy()
    expect(icon.classes()).toContain('text-success')
    // FIXME
    // expect(icon.attributes()['icon']).toBe('$show')
  })
  it('if props.status is false v-icon has to render props.iconFalse and class text-failure', () => {
    const wrapper = shallowMount(StatusIcon, {
      props: {
        status: false,
        iconTrue: '$show',
        iconFalse: '$hide'
      },
      global: {
        components: {
          StatusIcon
        },
        plugins: [vuetify]
      }
    })
    const icon = wrapper.find('[data-testid="StatusIconVIcon"]')
    expect(icon.exists()).toBeTruthy()
    expect(icon.classes()).toContain('text-failure')
    // FIXME
    // expect(icon.attributes()['icon']).toBe('$hide'))
  })
})
