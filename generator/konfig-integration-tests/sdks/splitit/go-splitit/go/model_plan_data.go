/*
splitit-web-api-v3

Splitit's Web API

API version: 1.0.0
*/

// Code generated by Konfig (https://konfigthis.com); DO NOT EDIT.

package splitit

import (
	"encoding/json"
	"time"
)

// PlanData struct for PlanData
type PlanData struct {
	TerminalId *string `json:"TerminalId,omitempty"`
	TotalAmount float32 `json:"TotalAmount"`
	FirstInstallmentAmount *float32 `json:"FirstInstallmentAmount,omitempty"`
	Currency *string `json:"Currency,omitempty"`
	NumberOfInstallments int32 `json:"NumberOfInstallments"`
	PurchaseMethod PurchaseMethod `json:"PurchaseMethod"`
	RefOrderNumber *string `json:"RefOrderNumber,omitempty"`
	AllowedInstallmentOptions []int32 `json:"AllowedInstallmentOptions,omitempty"`
	Tags *map[string]string `json:"Tags,omitempty"`
	ProcessingData *ProcessingData2 `json:"ProcessingData,omitempty"`
	FirstInstallmentDate *time.Time `json:"FirstInstallmentDate,omitempty"`
}

// NewPlanData instantiates a new PlanData object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPlanData(totalAmount float32, numberOfInstallments int32, purchaseMethod PurchaseMethod) *PlanData {
	this := PlanData{}
	this.TotalAmount = totalAmount
	this.NumberOfInstallments = numberOfInstallments
	this.PurchaseMethod = purchaseMethod
	return &this
}

// NewPlanDataWithDefaults instantiates a new PlanData object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPlanDataWithDefaults() *PlanData {
	this := PlanData{}
	return &this
}

// GetTerminalId returns the TerminalId field value if set, zero value otherwise.
func (o *PlanData) GetTerminalId() string {
	if o == nil || isNil(o.TerminalId) {
		var ret string
		return ret
	}
	return *o.TerminalId
}

// GetTerminalIdOk returns a tuple with the TerminalId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PlanData) GetTerminalIdOk() (*string, bool) {
	if o == nil || isNil(o.TerminalId) {
    return nil, false
	}
	return o.TerminalId, true
}

// HasTerminalId returns a boolean if a field has been set.
func (o *PlanData) HasTerminalId() bool {
	if o != nil && !isNil(o.TerminalId) {
		return true
	}

	return false
}

// SetTerminalId gets a reference to the given string and assigns it to the TerminalId field.
func (o *PlanData) SetTerminalId(v string) {
	o.TerminalId = &v
}

// GetTotalAmount returns the TotalAmount field value
func (o *PlanData) GetTotalAmount() float32 {
	if o == nil {
		var ret float32
		return ret
	}

	return o.TotalAmount
}

// GetTotalAmountOk returns a tuple with the TotalAmount field value
// and a boolean to check if the value has been set.
func (o *PlanData) GetTotalAmountOk() (*float32, bool) {
	if o == nil {
    return nil, false
	}
	return &o.TotalAmount, true
}

// SetTotalAmount sets field value
func (o *PlanData) SetTotalAmount(v float32) {
	o.TotalAmount = v
}

// GetFirstInstallmentAmount returns the FirstInstallmentAmount field value if set, zero value otherwise.
func (o *PlanData) GetFirstInstallmentAmount() float32 {
	if o == nil || isNil(o.FirstInstallmentAmount) {
		var ret float32
		return ret
	}
	return *o.FirstInstallmentAmount
}

// GetFirstInstallmentAmountOk returns a tuple with the FirstInstallmentAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PlanData) GetFirstInstallmentAmountOk() (*float32, bool) {
	if o == nil || isNil(o.FirstInstallmentAmount) {
    return nil, false
	}
	return o.FirstInstallmentAmount, true
}

// HasFirstInstallmentAmount returns a boolean if a field has been set.
func (o *PlanData) HasFirstInstallmentAmount() bool {
	if o != nil && !isNil(o.FirstInstallmentAmount) {
		return true
	}

	return false
}

// SetFirstInstallmentAmount gets a reference to the given float32 and assigns it to the FirstInstallmentAmount field.
func (o *PlanData) SetFirstInstallmentAmount(v float32) {
	o.FirstInstallmentAmount = &v
}

// GetCurrency returns the Currency field value if set, zero value otherwise.
func (o *PlanData) GetCurrency() string {
	if o == nil || isNil(o.Currency) {
		var ret string
		return ret
	}
	return *o.Currency
}

// GetCurrencyOk returns a tuple with the Currency field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PlanData) GetCurrencyOk() (*string, bool) {
	if o == nil || isNil(o.Currency) {
    return nil, false
	}
	return o.Currency, true
}

// HasCurrency returns a boolean if a field has been set.
func (o *PlanData) HasCurrency() bool {
	if o != nil && !isNil(o.Currency) {
		return true
	}

	return false
}

// SetCurrency gets a reference to the given string and assigns it to the Currency field.
func (o *PlanData) SetCurrency(v string) {
	o.Currency = &v
}

// GetNumberOfInstallments returns the NumberOfInstallments field value
func (o *PlanData) GetNumberOfInstallments() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.NumberOfInstallments
}

// GetNumberOfInstallmentsOk returns a tuple with the NumberOfInstallments field value
// and a boolean to check if the value has been set.
func (o *PlanData) GetNumberOfInstallmentsOk() (*int32, bool) {
	if o == nil {
    return nil, false
	}
	return &o.NumberOfInstallments, true
}

// SetNumberOfInstallments sets field value
func (o *PlanData) SetNumberOfInstallments(v int32) {
	o.NumberOfInstallments = v
}

// GetPurchaseMethod returns the PurchaseMethod field value
func (o *PlanData) GetPurchaseMethod() PurchaseMethod {
	if o == nil {
		var ret PurchaseMethod
		return ret
	}

	return o.PurchaseMethod
}

// GetPurchaseMethodOk returns a tuple with the PurchaseMethod field value
// and a boolean to check if the value has been set.
func (o *PlanData) GetPurchaseMethodOk() (*PurchaseMethod, bool) {
	if o == nil {
    return nil, false
	}
	return &o.PurchaseMethod, true
}

// SetPurchaseMethod sets field value
func (o *PlanData) SetPurchaseMethod(v PurchaseMethod) {
	o.PurchaseMethod = v
}

// GetRefOrderNumber returns the RefOrderNumber field value if set, zero value otherwise.
func (o *PlanData) GetRefOrderNumber() string {
	if o == nil || isNil(o.RefOrderNumber) {
		var ret string
		return ret
	}
	return *o.RefOrderNumber
}

// GetRefOrderNumberOk returns a tuple with the RefOrderNumber field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PlanData) GetRefOrderNumberOk() (*string, bool) {
	if o == nil || isNil(o.RefOrderNumber) {
    return nil, false
	}
	return o.RefOrderNumber, true
}

// HasRefOrderNumber returns a boolean if a field has been set.
func (o *PlanData) HasRefOrderNumber() bool {
	if o != nil && !isNil(o.RefOrderNumber) {
		return true
	}

	return false
}

// SetRefOrderNumber gets a reference to the given string and assigns it to the RefOrderNumber field.
func (o *PlanData) SetRefOrderNumber(v string) {
	o.RefOrderNumber = &v
}

// GetAllowedInstallmentOptions returns the AllowedInstallmentOptions field value if set, zero value otherwise.
func (o *PlanData) GetAllowedInstallmentOptions() []int32 {
	if o == nil || isNil(o.AllowedInstallmentOptions) {
		var ret []int32
		return ret
	}
	return o.AllowedInstallmentOptions
}

// GetAllowedInstallmentOptionsOk returns a tuple with the AllowedInstallmentOptions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PlanData) GetAllowedInstallmentOptionsOk() ([]int32, bool) {
	if o == nil || isNil(o.AllowedInstallmentOptions) {
    return nil, false
	}
	return o.AllowedInstallmentOptions, true
}

// HasAllowedInstallmentOptions returns a boolean if a field has been set.
func (o *PlanData) HasAllowedInstallmentOptions() bool {
	if o != nil && !isNil(o.AllowedInstallmentOptions) {
		return true
	}

	return false
}

// SetAllowedInstallmentOptions gets a reference to the given []int32 and assigns it to the AllowedInstallmentOptions field.
func (o *PlanData) SetAllowedInstallmentOptions(v []int32) {
	o.AllowedInstallmentOptions = v
}

// GetTags returns the Tags field value if set, zero value otherwise.
func (o *PlanData) GetTags() map[string]string {
	if o == nil || isNil(o.Tags) {
		var ret map[string]string
		return ret
	}
	return *o.Tags
}

// GetTagsOk returns a tuple with the Tags field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PlanData) GetTagsOk() (*map[string]string, bool) {
	if o == nil || isNil(o.Tags) {
    return nil, false
	}
	return o.Tags, true
}

// HasTags returns a boolean if a field has been set.
func (o *PlanData) HasTags() bool {
	if o != nil && !isNil(o.Tags) {
		return true
	}

	return false
}

// SetTags gets a reference to the given map[string]string and assigns it to the Tags field.
func (o *PlanData) SetTags(v map[string]string) {
	o.Tags = &v
}

// GetProcessingData returns the ProcessingData field value if set, zero value otherwise.
func (o *PlanData) GetProcessingData() ProcessingData2 {
	if o == nil || isNil(o.ProcessingData) {
		var ret ProcessingData2
		return ret
	}
	return *o.ProcessingData
}

// GetProcessingDataOk returns a tuple with the ProcessingData field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PlanData) GetProcessingDataOk() (*ProcessingData2, bool) {
	if o == nil || isNil(o.ProcessingData) {
    return nil, false
	}
	return o.ProcessingData, true
}

// HasProcessingData returns a boolean if a field has been set.
func (o *PlanData) HasProcessingData() bool {
	if o != nil && !isNil(o.ProcessingData) {
		return true
	}

	return false
}

// SetProcessingData gets a reference to the given ProcessingData2 and assigns it to the ProcessingData field.
func (o *PlanData) SetProcessingData(v ProcessingData2) {
	o.ProcessingData = &v
}

// GetFirstInstallmentDate returns the FirstInstallmentDate field value if set, zero value otherwise.
func (o *PlanData) GetFirstInstallmentDate() time.Time {
	if o == nil || isNil(o.FirstInstallmentDate) {
		var ret time.Time
		return ret
	}
	return *o.FirstInstallmentDate
}

// GetFirstInstallmentDateOk returns a tuple with the FirstInstallmentDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PlanData) GetFirstInstallmentDateOk() (*time.Time, bool) {
	if o == nil || isNil(o.FirstInstallmentDate) {
    return nil, false
	}
	return o.FirstInstallmentDate, true
}

// HasFirstInstallmentDate returns a boolean if a field has been set.
func (o *PlanData) HasFirstInstallmentDate() bool {
	if o != nil && !isNil(o.FirstInstallmentDate) {
		return true
	}

	return false
}

// SetFirstInstallmentDate gets a reference to the given time.Time and assigns it to the FirstInstallmentDate field.
func (o *PlanData) SetFirstInstallmentDate(v time.Time) {
	o.FirstInstallmentDate = &v
}

func (o PlanData) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if !isNil(o.TerminalId) {
		toSerialize["TerminalId"] = o.TerminalId
	}
	if true {
		toSerialize["TotalAmount"] = o.TotalAmount
	}
	if !isNil(o.FirstInstallmentAmount) {
		toSerialize["FirstInstallmentAmount"] = o.FirstInstallmentAmount
	}
	if !isNil(o.Currency) {
		toSerialize["Currency"] = o.Currency
	}
	if true {
		toSerialize["NumberOfInstallments"] = o.NumberOfInstallments
	}
	if true {
		toSerialize["PurchaseMethod"] = o.PurchaseMethod
	}
	if !isNil(o.RefOrderNumber) {
		toSerialize["RefOrderNumber"] = o.RefOrderNumber
	}
	if !isNil(o.AllowedInstallmentOptions) {
		toSerialize["AllowedInstallmentOptions"] = o.AllowedInstallmentOptions
	}
	if !isNil(o.Tags) {
		toSerialize["Tags"] = o.Tags
	}
	if !isNil(o.ProcessingData) {
		toSerialize["ProcessingData"] = o.ProcessingData
	}
	if !isNil(o.FirstInstallmentDate) {
		toSerialize["FirstInstallmentDate"] = o.FirstInstallmentDate
	}
	return json.Marshal(toSerialize)
}

type NullablePlanData struct {
	value *PlanData
	isSet bool
}

func (v NullablePlanData) Get() *PlanData {
	return v.value
}

func (v *NullablePlanData) Set(val *PlanData) {
	v.value = val
	v.isSet = true
}

func (v NullablePlanData) IsSet() bool {
	return v.isSet
}

func (v *NullablePlanData) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePlanData(val *PlanData) *NullablePlanData {
	return &NullablePlanData{value: val, isSet: true}
}

func (v NullablePlanData) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePlanData) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

