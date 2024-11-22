import {PropertyType} from "./PropertyType";

/**
 * Represents a generic value which can be replaced with a concrete type
 */
export interface GenericPropertyType extends PropertyType {
    name?: string
}

