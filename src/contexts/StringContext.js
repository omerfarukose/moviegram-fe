import React, {Component, createContext} from 'react'
import { myStrings } from '../values/Strings';

export const StringContext = createContext();
export const StringConsumer = StringContext.Consumer;

class StringContextProvider extends Component{
    state = {
        myStrings: "d"
    }
}