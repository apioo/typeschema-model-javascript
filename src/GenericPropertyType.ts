import type {PropertyType} from "./PropertyType";

/**
 * A placeholder for a type that will be specified at runtime or through template arguments.
 */
export interface GenericPropertyType extends PropertyType {
    type: "generic"
    name?: string
}

