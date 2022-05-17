import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import TxList from './TxList'
import { TxData } from 'lib/getTxs'

export default {
  title: 'TxList',
  component: TxList,
} as ComponentMeta<typeof TxList>

export const Sample1: ComponentStory<typeof TxList> = () => {
    return <TxList txs={[
        {attributes: { variant: 'h1', text: 'Hi mom'}},
        {attributes: { variant: 'h2', text: 'Hi mom'}},
        {attributes: { variant: 'h3', text: 'Hi mom'}},
        {attributes: { variant: 'h4', text: 'Hi mom'}},
        {attributes: { variant: 'h5', text: 'Hi mom'}},
        {attributes: { variant: 'h6', text: 'Hi mom'}},
        {attributes: { variant: 'subtitle1', text: 'Hi mom'}},
        {attributes: { variant: 'subtitle2', text: 'Hi mom'}},
        {attributes: { variant: 'body1', text: 'Hi mom'}},
        {attributes: { variant: 'body2', text: 'Hi mom'}},
    ]} />
}

export const TopOfPage: ComponentStory<typeof TxList> = () => {
    return <TxList txs={[
        {attributes: { variant: 'subtitle1', text: 'Yield Curves and Indices'}},
        {attributes: { variant: 'h5', text: 'BondWave AA QCurve'}},
        {attributes: { variant: 'subtitle2', text: 'The BondWave AA QCurve is a quantitatively derived yield curve built from executed trades offering full data transparency. Data are available for 03/01/2017 through 04/14/2022.'}},
        {attributes: { variant: 'body1', text: 'Access additional information about this provider and its methodology here.', href: 'https://www.msrb.org/~/media/Files/EMMA/BondWave-Methodology.ashx'}},
        {attributes: { variant: 'body1', text: 'For more information on understanding yield curves and indices, visit EMMA Help.', href: 'https://emma.msrb.org/EmmaHelp/UnderstandingYieldCurvesandIndices'}},
    ]} />
}

export const NoiseAtBottom: ComponentStory<typeof TxList> = () => {
    return <TxList txs={[
        {attributes: { variant: 'body2', text: 'QCurves™ © BondWave LLC 2018-2022. All rights reserved. QCurves™ powered by Effi™. All rights reserved.', gutterBottom: true}},
        {attributes: { variant: 'body2', text: 'The MSRB does not review or independently verify the accuracy, completeness, timeliness, methodology used in or other aspects of the index values, indices or other data or information provided by third-party providers. The products or services displayed on EMMA are among those available in the marketplace. The display of any particular third-party product or service on the EMMA website by trade name, trademark, manufacturer, or otherwise does not constitute or imply the MSRB’s sponsorship, approval, affiliation, endorsement, recommendation, or favoring of such product or service.'}},
    ]} />
}