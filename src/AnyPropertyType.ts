import type {PropertyType} from "./PropertyType";

/**
 * Represents a wildcard property that accepts any valid JSON value (object, array, string, number, boolean, or null).
 */
export interface AnyPropertyType extends PropertyType {
    type: "any"
}

