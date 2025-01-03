/*
Carbon

Connect external data to LLMs, no matter the source.

API version: 1.0.0
*/

// Code generated by Konfig (https://konfigthis.com); DO NOT EDIT.

package carbon

import (
	"encoding/json"
)

// ChunksAndEmbeddings struct for ChunksAndEmbeddings
type ChunksAndEmbeddings struct {
	ChunkNumber NullableInt32 `json:"chunk_number"`
	Chunk string `json:"chunk"`
	Embedding []float32 `json:"embedding"`
}

// NewChunksAndEmbeddings instantiates a new ChunksAndEmbeddings object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChunksAndEmbeddings(chunkNumber NullableInt32, chunk string, embedding []float32) *ChunksAndEmbeddings {
	this := ChunksAndEmbeddings{}
	this.ChunkNumber = chunkNumber
	this.Chunk = chunk
	this.Embedding = embedding
	return &this
}

// NewChunksAndEmbeddingsWithDefaults instantiates a new ChunksAndEmbeddings object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChunksAndEmbeddingsWithDefaults() *ChunksAndEmbeddings {
	this := ChunksAndEmbeddings{}
	return &this
}

// GetChunkNumber returns the ChunkNumber field value
// If the value is explicit nil, the zero value for int32 will be returned
func (o *ChunksAndEmbeddings) GetChunkNumber() int32 {
	if o == nil || o.ChunkNumber.Get() == nil {
		var ret int32
		return ret
	}

	return *o.ChunkNumber.Get()
}

// GetChunkNumberOk returns a tuple with the ChunkNumber field value
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *ChunksAndEmbeddings) GetChunkNumberOk() (*int32, bool) {
	if o == nil {
    return nil, false
	}
	return o.ChunkNumber.Get(), o.ChunkNumber.IsSet()
}

// SetChunkNumber sets field value
func (o *ChunksAndEmbeddings) SetChunkNumber(v int32) {
	o.ChunkNumber.Set(&v)
}

// GetChunk returns the Chunk field value
func (o *ChunksAndEmbeddings) GetChunk() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Chunk
}

// GetChunkOk returns a tuple with the Chunk field value
// and a boolean to check if the value has been set.
func (o *ChunksAndEmbeddings) GetChunkOk() (*string, bool) {
	if o == nil {
    return nil, false
	}
	return &o.Chunk, true
}

// SetChunk sets field value
func (o *ChunksAndEmbeddings) SetChunk(v string) {
	o.Chunk = v
}

// GetEmbedding returns the Embedding field value
func (o *ChunksAndEmbeddings) GetEmbedding() []float32 {
	if o == nil {
		var ret []float32
		return ret
	}

	return o.Embedding
}

// GetEmbeddingOk returns a tuple with the Embedding field value
// and a boolean to check if the value has been set.
func (o *ChunksAndEmbeddings) GetEmbeddingOk() ([]float32, bool) {
	if o == nil {
    return nil, false
	}
	return o.Embedding, true
}

// SetEmbedding sets field value
func (o *ChunksAndEmbeddings) SetEmbedding(v []float32) {
	o.Embedding = v
}

func (o ChunksAndEmbeddings) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["chunk_number"] = o.ChunkNumber.Get()
	}
	if true {
		toSerialize["chunk"] = o.Chunk
	}
	if true {
		toSerialize["embedding"] = o.Embedding
	}
	return json.Marshal(toSerialize)
}

type NullableChunksAndEmbeddings struct {
	value *ChunksAndEmbeddings
	isSet bool
}

func (v NullableChunksAndEmbeddings) Get() *ChunksAndEmbeddings {
	return v.value
}

func (v *NullableChunksAndEmbeddings) Set(val *ChunksAndEmbeddings) {
	v.value = val
	v.isSet = true
}

func (v NullableChunksAndEmbeddings) IsSet() bool {
	return v.isSet
}

func (v *NullableChunksAndEmbeddings) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChunksAndEmbeddings(val *ChunksAndEmbeddings) *NullableChunksAndEmbeddings {
	return &NullableChunksAndEmbeddings{value: val, isSet: true}
}

func (v NullableChunksAndEmbeddings) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChunksAndEmbeddings) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


