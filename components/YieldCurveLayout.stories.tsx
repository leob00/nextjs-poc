import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import YieldCurveLayout from './YieldCurveLayout'

export default {
  title: 'YieldCurveLayout',
  component: YieldCurveLayout,
} as ComponentMeta<typeof YieldCurveLayout>

export const H1: ComponentStory<typeof YieldCurveLayout> = () => {
  return (
    <YieldCurveLayout
      data={{
        rows: [
          { yearsToMaturity: 1, yield: 0.52 },
          { yearsToMaturity: 2, yield: 0.61 },
          { yearsToMaturity: 3, yield: 0.66 },
          { yearsToMaturity: 4, yield: 0.71 },
          { yearsToMaturity: 5, yield: 0.72 },
        ],
      }}
    />
  )
}
