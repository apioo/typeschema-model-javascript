import type {CollectionPropertyType} from "./CollectionPropertyType";

/**
 * Represents a property containing a key-value map where all values share the same schema.
 */
export interface MapPropertyType extends CollectionPropertyType {
    type: "map"
}

