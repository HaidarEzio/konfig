/*
 * Carbon
 * Connect external data to LLMs, no matter the source.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by Konfig (https://konfigthis.com).
 * Do not edit the class manually.
 */


package com.konfigthis.carbonai.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.time.OffsetDateTime;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;
import com.google.gson.TypeAdapterFactory;
import com.google.gson.reflect.TypeToken;
import org.apache.commons.lang3.StringUtils;

import java.lang.reflect.Type;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import com.konfigthis.carbonai.client.JSON;

/**
 * OrganizationResponse
 */@javax.annotation.Generated(value = "Generated by https://konfigthis.com")
public class OrganizationResponse {
  public static final String SERIALIZED_NAME_ID = "id";
  @SerializedName(SERIALIZED_NAME_ID)
  private Integer id;

  public static final String SERIALIZED_NAME_NAME = "name";
  @SerializedName(SERIALIZED_NAME_NAME)
  private String name;

  public static final String SERIALIZED_NAME_NICKNAME = "nickname";
  @SerializedName(SERIALIZED_NAME_NICKNAME)
  private String nickname;

  public static final String SERIALIZED_NAME_REMOVE_BRANDING = "remove_branding";
  @SerializedName(SERIALIZED_NAME_REMOVE_BRANDING)
  private Boolean removeBranding;

  public static final String SERIALIZED_NAME_CUSTOM_BRANDING = "custom_branding";
  @SerializedName(SERIALIZED_NAME_CUSTOM_BRANDING)
  private Object customBranding;

  public static final String SERIALIZED_NAME_CUSTOM_LIMITS = "custom_limits";
  @SerializedName(SERIALIZED_NAME_CUSTOM_LIMITS)
  private Object customLimits;

  public static final String SERIALIZED_NAME_AGGREGATE_FILE_SIZE = "aggregate_file_size";
  @SerializedName(SERIALIZED_NAME_AGGREGATE_FILE_SIZE)
  private Object aggregateFileSize;

  public static final String SERIALIZED_NAME_AGGREGATE_NUM_CHARACTERS = "aggregate_num_characters";
  @SerializedName(SERIALIZED_NAME_AGGREGATE_NUM_CHARACTERS)
  private Object aggregateNumCharacters;

  public static final String SERIALIZED_NAME_AGGREGATE_NUM_TOKENS = "aggregate_num_tokens";
  @SerializedName(SERIALIZED_NAME_AGGREGATE_NUM_TOKENS)
  private Object aggregateNumTokens;

  public static final String SERIALIZED_NAME_AGGREGATE_NUM_EMBEDDINGS = "aggregate_num_embeddings";
  @SerializedName(SERIALIZED_NAME_AGGREGATE_NUM_EMBEDDINGS)
  private Object aggregateNumEmbeddings;

  public static final String SERIALIZED_NAME_AGGREGATE_NUM_FILES_BY_SOURCE = "aggregate_num_files_by_source";
  @SerializedName(SERIALIZED_NAME_AGGREGATE_NUM_FILES_BY_SOURCE)
  private Object aggregateNumFilesBySource;

  public static final String SERIALIZED_NAME_AGGREGATE_NUM_FILES_BY_FILE_FORMAT = "aggregate_num_files_by_file_format";
  @SerializedName(SERIALIZED_NAME_AGGREGATE_NUM_FILES_BY_FILE_FORMAT)
  private Object aggregateNumFilesByFileFormat;

  public static final String SERIALIZED_NAME_FILE_STATISTICS_AGGREGATED_AT = "file_statistics_aggregated_at";
  @SerializedName(SERIALIZED_NAME_FILE_STATISTICS_AGGREGATED_AT)
  private OffsetDateTime fileStatisticsAggregatedAt;

  public static final String SERIALIZED_NAME_PERIOD_ENDS_AT = "period_ends_at";
  @SerializedName(SERIALIZED_NAME_PERIOD_ENDS_AT)
  private OffsetDateTime periodEndsAt;

  public static final String SERIALIZED_NAME_CANCEL_AT_PERIOD_END = "cancel_at_period_end";
  @SerializedName(SERIALIZED_NAME_CANCEL_AT_PERIOD_END)
  private Boolean cancelAtPeriodEnd;

  public static final String SERIALIZED_NAME_GLOBAL_USER_CONFIG = "global_user_config";
  @SerializedName(SERIALIZED_NAME_GLOBAL_USER_CONFIG)
  private Object globalUserConfig;

  public static final String SERIALIZED_NAME_CREATED_AT = "created_at";
  @SerializedName(SERIALIZED_NAME_CREATED_AT)
  private OffsetDateTime createdAt;

  public static final String SERIALIZED_NAME_UPDATED_AT = "updated_at";
  @SerializedName(SERIALIZED_NAME_UPDATED_AT)
  private OffsetDateTime updatedAt;

  public OrganizationResponse() {
  }

  public OrganizationResponse id(Integer id) {
    
    
    
    
    this.id = id;
    return this;
  }

   /**
   * Get id
   * @return id
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public Integer getId() {
    return id;
  }


  public void setId(Integer id) {
    
    
    
    this.id = id;
  }


  public OrganizationResponse name(String name) {
    
    
    
    
    this.name = name;
    return this;
  }

   /**
   * Get name
   * @return name
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public String getName() {
    return name;
  }


  public void setName(String name) {
    
    
    
    this.name = name;
  }


  public OrganizationResponse nickname(String nickname) {
    
    
    
    
    this.nickname = nickname;
    return this;
  }

   /**
   * Get nickname
   * @return nickname
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(required = true, value = "")

  public String getNickname() {
    return nickname;
  }


  public void setNickname(String nickname) {
    
    
    
    this.nickname = nickname;
  }


  public OrganizationResponse removeBranding(Boolean removeBranding) {
    
    
    
    
    this.removeBranding = removeBranding;
    return this;
  }

   /**
   * Get removeBranding
   * @return removeBranding
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public Boolean getRemoveBranding() {
    return removeBranding;
  }


  public void setRemoveBranding(Boolean removeBranding) {
    
    
    
    this.removeBranding = removeBranding;
  }


  public OrganizationResponse customBranding(Object customBranding) {
    
    
    
    
    this.customBranding = customBranding;
    return this;
  }

   /**
   * Get customBranding
   * @return customBranding
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(required = true, value = "")

  public Object getCustomBranding() {
    return customBranding;
  }


  public void setCustomBranding(Object customBranding) {
    
    
    
    this.customBranding = customBranding;
  }


  public OrganizationResponse customLimits(Object customLimits) {
    
    
    
    
    this.customLimits = customLimits;
    return this;
  }

   /**
   * Get customLimits
   * @return customLimits
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(required = true, value = "")

  public Object getCustomLimits() {
    return customLimits;
  }


  public void setCustomLimits(Object customLimits) {
    
    
    
    this.customLimits = customLimits;
  }


  public OrganizationResponse aggregateFileSize(Object aggregateFileSize) {
    
    
    
    
    this.aggregateFileSize = aggregateFileSize;
    return this;
  }

   /**
   * Get aggregateFileSize
   * @return aggregateFileSize
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public Object getAggregateFileSize() {
    return aggregateFileSize;
  }


  public void setAggregateFileSize(Object aggregateFileSize) {
    
    
    
    this.aggregateFileSize = aggregateFileSize;
  }


  public OrganizationResponse aggregateNumCharacters(Object aggregateNumCharacters) {
    
    
    
    
    this.aggregateNumCharacters = aggregateNumCharacters;
    return this;
  }

   /**
   * Get aggregateNumCharacters
   * @return aggregateNumCharacters
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public Object getAggregateNumCharacters() {
    return aggregateNumCharacters;
  }


  public void setAggregateNumCharacters(Object aggregateNumCharacters) {
    
    
    
    this.aggregateNumCharacters = aggregateNumCharacters;
  }


  public OrganizationResponse aggregateNumTokens(Object aggregateNumTokens) {
    
    
    
    
    this.aggregateNumTokens = aggregateNumTokens;
    return this;
  }

   /**
   * Get aggregateNumTokens
   * @return aggregateNumTokens
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public Object getAggregateNumTokens() {
    return aggregateNumTokens;
  }


  public void setAggregateNumTokens(Object aggregateNumTokens) {
    
    
    
    this.aggregateNumTokens = aggregateNumTokens;
  }


  public OrganizationResponse aggregateNumEmbeddings(Object aggregateNumEmbeddings) {
    
    
    
    
    this.aggregateNumEmbeddings = aggregateNumEmbeddings;
    return this;
  }

   /**
   * Get aggregateNumEmbeddings
   * @return aggregateNumEmbeddings
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public Object getAggregateNumEmbeddings() {
    return aggregateNumEmbeddings;
  }


  public void setAggregateNumEmbeddings(Object aggregateNumEmbeddings) {
    
    
    
    this.aggregateNumEmbeddings = aggregateNumEmbeddings;
  }


  public OrganizationResponse aggregateNumFilesBySource(Object aggregateNumFilesBySource) {
    
    
    
    
    this.aggregateNumFilesBySource = aggregateNumFilesBySource;
    return this;
  }

   /**
   * Get aggregateNumFilesBySource
   * @return aggregateNumFilesBySource
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public Object getAggregateNumFilesBySource() {
    return aggregateNumFilesBySource;
  }


  public void setAggregateNumFilesBySource(Object aggregateNumFilesBySource) {
    
    
    
    this.aggregateNumFilesBySource = aggregateNumFilesBySource;
  }


  public OrganizationResponse aggregateNumFilesByFileFormat(Object aggregateNumFilesByFileFormat) {
    
    
    
    
    this.aggregateNumFilesByFileFormat = aggregateNumFilesByFileFormat;
    return this;
  }

   /**
   * Get aggregateNumFilesByFileFormat
   * @return aggregateNumFilesByFileFormat
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public Object getAggregateNumFilesByFileFormat() {
    return aggregateNumFilesByFileFormat;
  }


  public void setAggregateNumFilesByFileFormat(Object aggregateNumFilesByFileFormat) {
    
    
    
    this.aggregateNumFilesByFileFormat = aggregateNumFilesByFileFormat;
  }


  public OrganizationResponse fileStatisticsAggregatedAt(OffsetDateTime fileStatisticsAggregatedAt) {
    
    
    
    
    this.fileStatisticsAggregatedAt = fileStatisticsAggregatedAt;
    return this;
  }

   /**
   * Get fileStatisticsAggregatedAt
   * @return fileStatisticsAggregatedAt
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(required = true, value = "")

  public OffsetDateTime getFileStatisticsAggregatedAt() {
    return fileStatisticsAggregatedAt;
  }


  public void setFileStatisticsAggregatedAt(OffsetDateTime fileStatisticsAggregatedAt) {
    
    
    
    this.fileStatisticsAggregatedAt = fileStatisticsAggregatedAt;
  }


  public OrganizationResponse periodEndsAt(OffsetDateTime periodEndsAt) {
    
    
    
    
    this.periodEndsAt = periodEndsAt;
    return this;
  }

   /**
   * Get periodEndsAt
   * @return periodEndsAt
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(required = true, value = "")

  public OffsetDateTime getPeriodEndsAt() {
    return periodEndsAt;
  }


  public void setPeriodEndsAt(OffsetDateTime periodEndsAt) {
    
    
    
    this.periodEndsAt = periodEndsAt;
  }


  public OrganizationResponse cancelAtPeriodEnd(Boolean cancelAtPeriodEnd) {
    
    
    
    
    this.cancelAtPeriodEnd = cancelAtPeriodEnd;
    return this;
  }

   /**
   * Get cancelAtPeriodEnd
   * @return cancelAtPeriodEnd
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(required = true, value = "")

  public Boolean getCancelAtPeriodEnd() {
    return cancelAtPeriodEnd;
  }


  public void setCancelAtPeriodEnd(Boolean cancelAtPeriodEnd) {
    
    
    
    this.cancelAtPeriodEnd = cancelAtPeriodEnd;
  }


  public OrganizationResponse globalUserConfig(Object globalUserConfig) {
    
    
    
    
    this.globalUserConfig = globalUserConfig;
    return this;
  }

   /**
   * Get globalUserConfig
   * @return globalUserConfig
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "{}", required = true, value = "")

  public Object getGlobalUserConfig() {
    return globalUserConfig;
  }


  public void setGlobalUserConfig(Object globalUserConfig) {
    
    
    
    this.globalUserConfig = globalUserConfig;
  }


  public OrganizationResponse createdAt(OffsetDateTime createdAt) {
    
    
    
    
    this.createdAt = createdAt;
    return this;
  }

   /**
   * Get createdAt
   * @return createdAt
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public OffsetDateTime getCreatedAt() {
    return createdAt;
  }


  public void setCreatedAt(OffsetDateTime createdAt) {
    
    
    
    this.createdAt = createdAt;
  }


  public OrganizationResponse updatedAt(OffsetDateTime updatedAt) {
    
    
    
    
    this.updatedAt = updatedAt;
    return this;
  }

   /**
   * Get updatedAt
   * @return updatedAt
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public OffsetDateTime getUpdatedAt() {
    return updatedAt;
  }


  public void setUpdatedAt(OffsetDateTime updatedAt) {
    
    
    
    this.updatedAt = updatedAt;
  }

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  private Map<String, Object> additionalProperties;

  /**
   * Set the additional (undeclared) property with the specified name and value.
   * If the property does not already exist, create it otherwise replace it.
   *
   * @param key name of the property
   * @param value value of the property
   * @return the OrganizationResponse instance itself
   */
  public OrganizationResponse putAdditionalProperty(String key, Object value) {
    if (this.additionalProperties == null) {
        this.additionalProperties = new HashMap<String, Object>();
    }
    this.additionalProperties.put(key, value);
    return this;
  }

  /**
   * Return the additional (undeclared) property.
   *
   * @return a map of objects
   */
  public Map<String, Object> getAdditionalProperties() {
    return additionalProperties;
  }

  /**
   * Return the additional (undeclared) property with the specified name.
   *
   * @param key name of the property
   * @return an object
   */
  public Object getAdditionalProperty(String key) {
    if (this.additionalProperties == null) {
        return null;
    }
    return this.additionalProperties.get(key);
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    OrganizationResponse organizationResponse = (OrganizationResponse) o;
    return Objects.equals(this.id, organizationResponse.id) &&
        Objects.equals(this.name, organizationResponse.name) &&
        Objects.equals(this.nickname, organizationResponse.nickname) &&
        Objects.equals(this.removeBranding, organizationResponse.removeBranding) &&
        Objects.equals(this.customBranding, organizationResponse.customBranding) &&
        Objects.equals(this.customLimits, organizationResponse.customLimits) &&
        Objects.equals(this.aggregateFileSize, organizationResponse.aggregateFileSize) &&
        Objects.equals(this.aggregateNumCharacters, organizationResponse.aggregateNumCharacters) &&
        Objects.equals(this.aggregateNumTokens, organizationResponse.aggregateNumTokens) &&
        Objects.equals(this.aggregateNumEmbeddings, organizationResponse.aggregateNumEmbeddings) &&
        Objects.equals(this.aggregateNumFilesBySource, organizationResponse.aggregateNumFilesBySource) &&
        Objects.equals(this.aggregateNumFilesByFileFormat, organizationResponse.aggregateNumFilesByFileFormat) &&
        Objects.equals(this.fileStatisticsAggregatedAt, organizationResponse.fileStatisticsAggregatedAt) &&
        Objects.equals(this.periodEndsAt, organizationResponse.periodEndsAt) &&
        Objects.equals(this.cancelAtPeriodEnd, organizationResponse.cancelAtPeriodEnd) &&
        Objects.equals(this.globalUserConfig, organizationResponse.globalUserConfig) &&
        Objects.equals(this.createdAt, organizationResponse.createdAt) &&
        Objects.equals(this.updatedAt, organizationResponse.updatedAt)&&
        Objects.equals(this.additionalProperties, organizationResponse.additionalProperties);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, name, nickname, removeBranding, customBranding, customLimits, aggregateFileSize, aggregateNumCharacters, aggregateNumTokens, aggregateNumEmbeddings, aggregateNumFilesBySource, aggregateNumFilesByFileFormat, fileStatisticsAggregatedAt, periodEndsAt, cancelAtPeriodEnd, globalUserConfig, createdAt, updatedAt, additionalProperties);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class OrganizationResponse {\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    nickname: ").append(toIndentedString(nickname)).append("\n");
    sb.append("    removeBranding: ").append(toIndentedString(removeBranding)).append("\n");
    sb.append("    customBranding: ").append(toIndentedString(customBranding)).append("\n");
    sb.append("    customLimits: ").append(toIndentedString(customLimits)).append("\n");
    sb.append("    aggregateFileSize: ").append(toIndentedString(aggregateFileSize)).append("\n");
    sb.append("    aggregateNumCharacters: ").append(toIndentedString(aggregateNumCharacters)).append("\n");
    sb.append("    aggregateNumTokens: ").append(toIndentedString(aggregateNumTokens)).append("\n");
    sb.append("    aggregateNumEmbeddings: ").append(toIndentedString(aggregateNumEmbeddings)).append("\n");
    sb.append("    aggregateNumFilesBySource: ").append(toIndentedString(aggregateNumFilesBySource)).append("\n");
    sb.append("    aggregateNumFilesByFileFormat: ").append(toIndentedString(aggregateNumFilesByFileFormat)).append("\n");
    sb.append("    fileStatisticsAggregatedAt: ").append(toIndentedString(fileStatisticsAggregatedAt)).append("\n");
    sb.append("    periodEndsAt: ").append(toIndentedString(periodEndsAt)).append("\n");
    sb.append("    cancelAtPeriodEnd: ").append(toIndentedString(cancelAtPeriodEnd)).append("\n");
    sb.append("    globalUserConfig: ").append(toIndentedString(globalUserConfig)).append("\n");
    sb.append("    createdAt: ").append(toIndentedString(createdAt)).append("\n");
    sb.append("    updatedAt: ").append(toIndentedString(updatedAt)).append("\n");
    sb.append("    additionalProperties: ").append(toIndentedString(additionalProperties)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }


  public static HashSet<String> openapiFields;
  public static HashSet<String> openapiRequiredFields;

  static {
    // a set of all properties/fields (JSON key names)
    openapiFields = new HashSet<String>();
    openapiFields.add("id");
    openapiFields.add("name");
    openapiFields.add("nickname");
    openapiFields.add("remove_branding");
    openapiFields.add("custom_branding");
    openapiFields.add("custom_limits");
    openapiFields.add("aggregate_file_size");
    openapiFields.add("aggregate_num_characters");
    openapiFields.add("aggregate_num_tokens");
    openapiFields.add("aggregate_num_embeddings");
    openapiFields.add("aggregate_num_files_by_source");
    openapiFields.add("aggregate_num_files_by_file_format");
    openapiFields.add("file_statistics_aggregated_at");
    openapiFields.add("period_ends_at");
    openapiFields.add("cancel_at_period_end");
    openapiFields.add("global_user_config");
    openapiFields.add("created_at");
    openapiFields.add("updated_at");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
    openapiRequiredFields.add("id");
    openapiRequiredFields.add("name");
    openapiRequiredFields.add("nickname");
    openapiRequiredFields.add("remove_branding");
    openapiRequiredFields.add("custom_branding");
    openapiRequiredFields.add("custom_limits");
    openapiRequiredFields.add("aggregate_file_size");
    openapiRequiredFields.add("aggregate_num_characters");
    openapiRequiredFields.add("aggregate_num_tokens");
    openapiRequiredFields.add("aggregate_num_embeddings");
    openapiRequiredFields.add("aggregate_num_files_by_source");
    openapiRequiredFields.add("aggregate_num_files_by_file_format");
    openapiRequiredFields.add("file_statistics_aggregated_at");
    openapiRequiredFields.add("period_ends_at");
    openapiRequiredFields.add("cancel_at_period_end");
    openapiRequiredFields.add("global_user_config");
    openapiRequiredFields.add("created_at");
    openapiRequiredFields.add("updated_at");
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to OrganizationResponse
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!OrganizationResponse.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in OrganizationResponse is not found in the empty JSON string", OrganizationResponse.openapiRequiredFields.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : OrganizationResponse.openapiRequiredFields) {
        if (jsonObj.get(requiredField) == null) {
          throw new IllegalArgumentException(String.format("The required field `%s` is not found in the JSON string: %s", requiredField, jsonObj.toString()));
        }
      }
      if (!jsonObj.get("name").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `name` to be a primitive type in the JSON string but got `%s`", jsonObj.get("name").toString()));
      }
      if (!jsonObj.get("nickname").isJsonNull() && !jsonObj.get("nickname").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `nickname` to be a primitive type in the JSON string but got `%s`", jsonObj.get("nickname").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!OrganizationResponse.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'OrganizationResponse' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<OrganizationResponse> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(OrganizationResponse.class));

       return (TypeAdapter<T>) new TypeAdapter<OrganizationResponse>() {
           @Override
           public void write(JsonWriter out, OrganizationResponse value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             obj.remove("additionalProperties");
             // serialize additonal properties
             if (value.getAdditionalProperties() != null) {
               for (Map.Entry<String, Object> entry : value.getAdditionalProperties().entrySet()) {
                 if (entry.getValue() instanceof String)
                   obj.addProperty(entry.getKey(), (String) entry.getValue());
                 else if (entry.getValue() instanceof Number)
                   obj.addProperty(entry.getKey(), (Number) entry.getValue());
                 else if (entry.getValue() instanceof Boolean)
                   obj.addProperty(entry.getKey(), (Boolean) entry.getValue());
                 else if (entry.getValue() instanceof Character)
                   obj.addProperty(entry.getKey(), (Character) entry.getValue());
                 else {
                   obj.add(entry.getKey(), gson.toJsonTree(entry.getValue()).getAsJsonObject());
                 }
               }
             }
             elementAdapter.write(out, obj);
           }

           @Override
           public OrganizationResponse read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             // store additional fields in the deserialized instance
             OrganizationResponse instance = thisAdapter.fromJsonTree(jsonObj);
             for (Map.Entry<String, JsonElement> entry : jsonObj.entrySet()) {
               if (!openapiFields.contains(entry.getKey())) {
                 if (entry.getValue().isJsonPrimitive()) { // primitive type
                   if (entry.getValue().getAsJsonPrimitive().isString())
                     instance.putAdditionalProperty(entry.getKey(), entry.getValue().getAsString());
                   else if (entry.getValue().getAsJsonPrimitive().isNumber())
                     instance.putAdditionalProperty(entry.getKey(), entry.getValue().getAsNumber());
                   else if (entry.getValue().getAsJsonPrimitive().isBoolean())
                     instance.putAdditionalProperty(entry.getKey(), entry.getValue().getAsBoolean());
                   else
                     throw new IllegalArgumentException(String.format("The field `%s` has unknown primitive type. Value: %s", entry.getKey(), entry.getValue().toString()));
                 } else if (entry.getValue().isJsonArray()) {
                     instance.putAdditionalProperty(entry.getKey(), gson.fromJson(entry.getValue(), List.class));
                 } else { // JSON object
                     instance.putAdditionalProperty(entry.getKey(), gson.fromJson(entry.getValue(), HashMap.class));
                 }
               }
             }
             return instance;
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of OrganizationResponse given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of OrganizationResponse
  * @throws IOException if the JSON string is invalid with respect to OrganizationResponse
  */
  public static OrganizationResponse fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, OrganizationResponse.class);
  }

 /**
  * Convert an instance of OrganizationResponse to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}
