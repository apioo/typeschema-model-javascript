import type {CollectionPropertyType} from "./CollectionPropertyType";

/**
 * A property containing a map of dynamic keys to a consistent value type.
 */
export interface MapPropertyType extends CollectionPropertyType {
    type: "map"
}

