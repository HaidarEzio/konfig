<?php
/**
 * StrategyQuotesGreek
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  SnapTrade
 * @author   Konfig
 * @link     https://konfigthis.com
 */

/**
 * SnapTrade
 *
 * Connect brokerage accounts to your app for live positions and trading
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: api@snaptrade.com
 * Generated by: https://konfigthis.com
 */


namespace SnapTrade\Model;

use \ArrayAccess;
use \SnapTrade\ObjectSerializer;

/**
 * StrategyQuotesGreek Class Doc Comment
 *
 * @category Class
 * @package  SnapTrade
 * @implements \ArrayAccess<string, mixed>
 */
class StrategyQuotesGreek implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'StrategyQuotes_greek';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'delta' => 'float',
        'gamma' => 'float',
        'theta' => 'float',
        'vega' => 'float',
        'rho' => 'float'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'delta' => null,
        'gamma' => null,
        'theta' => null,
        'vega' => null,
        'rho' => null
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'delta' => false,
		'gamma' => false,
		'theta' => false,
		'vega' => false,
		'rho' => false
    ];

    /**
      * If a nullable field gets set to null, insert it here
      *
      * @var boolean[]
      */
    protected array $openAPINullablesSetToNull = [];

    /**
     * Array of property to type mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPITypes()
    {
        return self::$openAPITypes;
    }

    /**
     * Array of property to format mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPIFormats()
    {
        return self::$openAPIFormats;
    }

    /**
     * Array of nullable properties
     *
     * @return array
     */
    protected static function openAPINullables(): array
    {
        return self::$openAPINullables;
    }

    /**
     * Array of nullable field names deliberately set to null
     *
     * @return boolean[]
     */
    private function getOpenAPINullablesSetToNull(): array
    {
        return $this->openAPINullablesSetToNull;
    }

    /**
     * Setter - Array of nullable field names deliberately set to null
     *
     * @param boolean[] $openAPINullablesSetToNull
     */
    private function setOpenAPINullablesSetToNull(array $openAPINullablesSetToNull): void
    {
        $this->openAPINullablesSetToNull = $openAPINullablesSetToNull;
    }

    /**
     * Checks if a property is nullable
     *
     * @param string $property
     * @return bool
     */
    public static function isNullable(string $property): bool
    {
        return self::openAPINullables()[$property] ?? false;
    }

    /**
     * Checks if a nullable property is set to null.
     *
     * @param string $property
     * @return bool
     */
    public function isNullableSetToNull(string $property): bool
    {
        return in_array($property, $this->getOpenAPINullablesSetToNull(), true);
    }

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @var string[]
     */
    protected static $attributeMap = [
        'delta' => 'delta',
        'gamma' => 'gamma',
        'theta' => 'theta',
        'vega' => 'vega',
        'rho' => 'rho'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'delta' => 'setDelta',
        'gamma' => 'setGamma',
        'theta' => 'setTheta',
        'vega' => 'setVega',
        'rho' => 'setRho'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'delta' => 'getDelta',
        'gamma' => 'getGamma',
        'theta' => 'getTheta',
        'vega' => 'getVega',
        'rho' => 'getRho'
    ];

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @return array
     */
    public static function attributeMap()
    {
        return self::$attributeMap;
    }

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @return array
     */
    public static function setters()
    {
        return self::$setters;
    }

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @return array
     */
    public static function getters()
    {
        return self::$getters;
    }

    /**
     * The original name of the model.
     *
     * @return string
     */
    public function getModelName()
    {
        return self::$openAPIModelName;
    }


    /**
     * Associative array for storing property values
     *
     * @var mixed[]
     */
    protected $container = [];

    /**
     * Constructor
     *
     * @param mixed[] $data Associated array of property values
     *                      initializing the model
     */
    public function __construct(array $data = null)
    {
        $this->setIfExists('delta', $data ?? [], null);
        $this->setIfExists('gamma', $data ?? [], null);
        $this->setIfExists('theta', $data ?? [], null);
        $this->setIfExists('vega', $data ?? [], null);
        $this->setIfExists('rho', $data ?? [], null);
    }

    /**
    * Sets $this->container[$variableName] to the given data or to the given default Value; if $variableName
    * is nullable and its value is set to null in the $fields array, then mark it as "set to null" in the
    * $this->openAPINullablesSetToNull array
    *
    * @param string $variableName
    * @param array  $fields
    * @param mixed  $defaultValue
    */
    private function setIfExists(string $variableName, array $fields, $defaultValue): void
    {
        if (self::isNullable($variableName) && array_key_exists($variableName, $fields) && is_null($fields[$variableName])) {
            $this->openAPINullablesSetToNull[] = $variableName;
        }

        $this->container[$variableName] = $fields[$variableName] ?? $defaultValue;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        return $invalidProperties;
    }

    /**
     * Validate all the properties in the model
     * return true if all passed
     *
     * @return bool True if all properties are valid
     */
    public function valid()
    {
        return count($this->listInvalidProperties()) === 0;
    }


    /**
     * Gets delta
     *
     * @return float|null
     */
    public function getDelta()
    {
        return $this->container['delta'];
    }

    /**
     * Sets delta
     *
     * @param float|null $delta delta
     *
     * @return self
     */
    public function setDelta($delta)
    {

        if (is_null($delta)) {
            throw new \InvalidArgumentException('non-nullable delta cannot be null');
        }

        $this->container['delta'] = $delta;

        return $this;
    }

    /**
     * Gets gamma
     *
     * @return float|null
     */
    public function getGamma()
    {
        return $this->container['gamma'];
    }

    /**
     * Sets gamma
     *
     * @param float|null $gamma gamma
     *
     * @return self
     */
    public function setGamma($gamma)
    {

        if (is_null($gamma)) {
            throw new \InvalidArgumentException('non-nullable gamma cannot be null');
        }

        $this->container['gamma'] = $gamma;

        return $this;
    }

    /**
     * Gets theta
     *
     * @return float|null
     */
    public function getTheta()
    {
        return $this->container['theta'];
    }

    /**
     * Sets theta
     *
     * @param float|null $theta theta
     *
     * @return self
     */
    public function setTheta($theta)
    {

        if (is_null($theta)) {
            throw new \InvalidArgumentException('non-nullable theta cannot be null');
        }

        $this->container['theta'] = $theta;

        return $this;
    }

    /**
     * Gets vega
     *
     * @return float|null
     */
    public function getVega()
    {
        return $this->container['vega'];
    }

    /**
     * Sets vega
     *
     * @param float|null $vega vega
     *
     * @return self
     */
    public function setVega($vega)
    {

        if (is_null($vega)) {
            throw new \InvalidArgumentException('non-nullable vega cannot be null');
        }

        $this->container['vega'] = $vega;

        return $this;
    }

    /**
     * Gets rho
     *
     * @return float|null
     */
    public function getRho()
    {
        return $this->container['rho'];
    }

    /**
     * Sets rho
     *
     * @param float|null $rho rho
     *
     * @return self
     */
    public function setRho($rho)
    {

        if (is_null($rho)) {
            throw new \InvalidArgumentException('non-nullable rho cannot be null');
        }

        $this->container['rho'] = $rho;

        return $this;
    }
    /**
     * Returns true if offset exists. False otherwise.
     *
     * @param integer $offset Offset
     *
     * @return boolean
     */
    public function offsetExists($offset): bool
    {
        return isset($this->container[$offset]);
    }

    /**
     * Gets offset.
     *
     * @param integer $offset Offset
     *
     * @return mixed|null
     */
    #[\ReturnTypeWillChange]
    public function offsetGet($offset)
    {
        return $this->container[$offset] ?? null;
    }

    /**
     * Sets value based on offset.
     *
     * @param int|null $offset Offset
     * @param mixed    $value  Value to be set
     *
     * @return void
     */
    public function offsetSet($offset, $value): void
    {
        if (is_null($offset)) {
            $this->container[] = $value;
        } else {
            $this->container[$offset] = $value;
        }
    }

    /**
     * Unsets offset.
     *
     * @param integer $offset Offset
     *
     * @return void
     */
    public function offsetUnset($offset): void
    {
        unset($this->container[$offset]);
    }

    /**
     * Serializes the object to a value that can be serialized natively by json_encode().
     * @link https://www.php.net/manual/en/jsonserializable.jsonserialize.php
     *
     * @return mixed Returns data which can be serialized by json_encode(), which is a value
     * of any type other than a resource.
     */
    #[\ReturnTypeWillChange]
    public function jsonSerialize()
    {
       return ObjectSerializer::sanitizeForSerialization($this);
    }

    /**
     * Gets the string presentation of the object
     *
     * @return string
     */
    public function __toString()
    {
        return json_encode(
            ObjectSerializer::sanitizeForSerialization($this),
            JSON_PRETTY_PRINT
        );
    }

    /**
     * Gets a header-safe presentation of the object
     *
     * @return string
     */
    public function toHeaderValue()
    {
        return json_encode(ObjectSerializer::sanitizeForSerialization($this));
    }
}

