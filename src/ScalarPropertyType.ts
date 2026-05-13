import type {BooleanPropertyType} from "./BooleanPropertyType";
import type {IntegerPropertyType} from "./IntegerPropertyType";
import type {NumberPropertyType} from "./NumberPropertyType";
import type {StringPropertyType} from "./StringPropertyType";
import type {PropertyType} from "./PropertyType";

/**
 * Abstract base for simple value types like strings, numbers, and booleans.
 */
export interface ScalarPropertyType extends PropertyType {
}

