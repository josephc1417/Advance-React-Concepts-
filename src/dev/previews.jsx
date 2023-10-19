import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import LowerStateChallenge from "../tutorial/11-performance/starter/02-lower-state-challenge/index.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/LowerStateChallenge">
                <LowerStateChallenge/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews