import type {PropertyType} from "./PropertyType";

/**
 * Represents a generic placeholder type that is resolved at runtime or via template arguments.
 */
export interface GenericPropertyType extends PropertyType {
    type: "generic"
    name?: string
}

