/*
NewsCatcher-V3 Production API

<img src='https://uploads-ssl.webflow.com/6429857b17973b636c2195c5/646c6f1eb774ff2f2997bec5_newscatcher_.svg' width='286' height='35' /> <br>  <br>Visit our website  <a href='https://newscatcherapi.com'>https://newscatcherapi.com</a>

API version: Beta-3.0.0
Contact: maksym@newscatcherapi.com
*/

// Code generated by Konfig (https://konfigthis.com); DO NOT EDIT.

package newscatcherapi

import (
	"encoding/json"
)

// ArticlesPropertyInner struct for ArticlesPropertyInner
type ArticlesPropertyInner struct {
	Title *string `json:"title,omitempty"`
	Description *string `json:"description,omitempty"`
	Author *string `json:"author,omitempty"`
	Authors *ArticlesPropertyInnerAuthors `json:"authors,omitempty"`
	Journalists *ArticlesPropertyInnerJournalists `json:"journalists,omitempty"`
	PublishedDate *string `json:"published_date,omitempty"`
	PublishedDatePrecision *string `json:"published_date_precision,omitempty"`
	UpdatedDate *string `json:"updated_date,omitempty"`
	UpdatedDatePrecision *string `json:"updated_date_precision,omitempty"`
	ParseDate *string `json:"parse_date,omitempty"`
	Link *string `json:"link,omitempty"`
	DomainUrl *string `json:"domain_url,omitempty"`
	FullDomainUrl *string `json:"full_domain_url,omitempty"`
	NameSource *string `json:"name_source,omitempty"`
	IsHeadline *string `json:"is_headline,omitempty"`
	PaidContent *bool `json:"paid_content,omitempty"`
	ExtractionData *string `json:"extraction_data,omitempty"`
	Country *string `json:"country,omitempty"`
	Rights *string `json:"rights,omitempty"`
	Rank *int32 `json:"rank,omitempty"`
	Media *string `json:"media,omitempty"`
	Language *string `json:"language,omitempty"`
	Content *string `json:"content,omitempty"`
	WordCount *int32 `json:"word_count,omitempty"`
	IsOpinion *bool `json:"is_opinion,omitempty"`
	TwitterAccount *string `json:"twitter_account,omitempty"`
	AllLinks *ArticlesPropertyInnerAllLinks `json:"all_links,omitempty"`
	AllDomainLinks *ArticlesPropertyInnerAllDomainLinks `json:"all_domain_links,omitempty"`
	Nlp map[string]interface{} `json:"nlp,omitempty"`
	Id *string `json:"id,omitempty"`
	Score *float32 `json:"score,omitempty"`
}

// NewArticlesPropertyInner instantiates a new ArticlesPropertyInner object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewArticlesPropertyInner() *ArticlesPropertyInner {
	this := ArticlesPropertyInner{}
	var wordCount int32 = 0
	this.WordCount = &wordCount
	return &this
}

// NewArticlesPropertyInnerWithDefaults instantiates a new ArticlesPropertyInner object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewArticlesPropertyInnerWithDefaults() *ArticlesPropertyInner {
	this := ArticlesPropertyInner{}
	var wordCount int32 = 0
	this.WordCount = &wordCount
	return &this
}

// GetTitle returns the Title field value if set, zero value otherwise.
func (o *ArticlesPropertyInner) GetTitle() string {
	if o == nil || isNil(o.Title) {
		var ret string
		return ret
	}
	return *o.Title
}

// GetTitleOk returns a tuple with the Title field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ArticlesPropertyInner) GetTitleOk() (*string, bool) {
	if o == nil || isNil(o.Title) {
    return nil, false
	}
	return o.Title, true
}

// HasTitle returns a boolean if a field has been set.
func (o *ArticlesPropertyInner) HasTitle() bool {
	if o != nil && !isNil(o.Title) {
		return true
	}

	return false
}

// SetTitle gets a reference to the given string and assigns it to the Title field.
func (o *ArticlesPropertyInner) SetTitle(v string) {
	o.Title = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *ArticlesPropertyInner) GetDescription() string {
	if o == nil || isNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ArticlesPropertyInner) GetDescriptionOk() (*string, bool) {
	if o == nil || isNil(o.Description) {
    return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *ArticlesPropertyInner) HasDescription() bool {
	if o != nil && !isNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *ArticlesPropertyInner) SetDescription(v string) {
	o.Description = &v
}

// GetAuthor returns the Author field value if set, zero value otherwise.
func (o *ArticlesPropertyInner) GetAuthor() string {
	if o == nil || isNil(o.Author) {
		var ret string
		return ret
	}
	return *o.Author
}

// GetAuthorOk returns a tuple with the Author field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ArticlesPropertyInner) GetAuthorOk() (*string, bool) {
	if o == nil || isNil(o.Author) {
    return nil, false
	}
	return o.Author, true
}

// HasAuthor returns a boolean if a field has been set.
func (o *ArticlesPropertyInner) HasAuthor() bool {
	if o != nil && !isNil(o.Author) {
		return true
	}

	return false
}

// SetAuthor gets a reference to the given string and assigns it to the Author field.
func (o *ArticlesPropertyInner) SetAuthor(v string) {
	o.Author = &v
}

// GetAuthors returns the Authors field value if set, zero value otherwise.
func (o *ArticlesPropertyInner) GetAuthors() ArticlesPropertyInnerAuthors {
	if o == nil || isNil(o.Authors) {
		var ret ArticlesPropertyInnerAuthors
		return ret
	}
	return *o.Authors
}

// GetAuthorsOk returns a tuple with the Authors field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ArticlesPropertyInner) GetAuthorsOk() (*ArticlesPropertyInnerAuthors, bool) {
	if o == nil || isNil(o.Authors) {
    return nil, false
	}
	return o.Authors, true
}

// HasAuthors returns a boolean if a field has been set.
func (o *ArticlesPropertyInner) HasAuthors() bool {
	if o != nil && !isNil(o.Authors) {
		return true
	}

	return false
}

// SetAuthors gets a reference to the given ArticlesPropertyInnerAuthors and assigns it to the Authors field.
func (o *ArticlesPropertyInner) SetAuthors(v ArticlesPropertyInnerAuthors) {
	o.Authors = &v
}

// GetJournalists returns the Journalists field value if set, zero value otherwise.
func (o *ArticlesPropertyInner) GetJournalists() ArticlesPropertyInnerJournalists {
	if o == nil || isNil(o.Journalists) {
		var ret ArticlesPropertyInnerJournalists
		return ret
	}
	return *o.Journalists
}

// GetJournalistsOk returns a tuple with the Journalists field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ArticlesPropertyInner) GetJournalistsOk() (*ArticlesPropertyInnerJournalists, bool) {
	if o == nil || isNil(o.Journalists) {
    return nil, false
	}
	return o.Journalists, true
}

// HasJournalists returns a boolean if a field has been set.
func (o *ArticlesPropertyInner) HasJournalists() bool {
	if o != nil && !isNil(o.Journalists) {
		return true
	}

	return false
}

// SetJournalists gets a reference to the given ArticlesPropertyInnerJournalists and assigns it to the Journalists field.
func (o *ArticlesPropertyInner) SetJournalists(v ArticlesPropertyInnerJournalists) {
	o.Journalists = &v
}

// GetPublishedDate returns the PublishedDate field value if set, zero value otherwise.
func (o *ArticlesPropertyInner) GetPublishedDate() string {
	if o == nil || isNil(o.PublishedDate) {
		var ret string
		return ret
	}
	return *o.PublishedDate
}

// GetPublishedDateOk returns a tuple with the PublishedDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ArticlesPropertyInner) GetPublishedDateOk() (*string, bool) {
	if o == nil || isNil(o.PublishedDate) {
    return nil, false
	}
	return o.PublishedDate, true
}

// HasPublishedDate returns a boolean if a field has been set.
func (o *ArticlesPropertyInner) HasPublishedDate() bool {
	if o != nil && !isNil(o.PublishedDate) {
		return true
	}

	return false
}

// SetPublishedDate gets a reference to the given string and assigns it to the PublishedDate field.
func (o *ArticlesPropertyInner) SetPublishedDate(v string) {
	o.PublishedDate = &v
}

// GetPublishedDatePrecision returns the PublishedDatePrecision field value if set, zero value otherwise.
func (o *ArticlesPropertyInner) GetPublishedDatePrecision() string {
	if o == nil || isNil(o.PublishedDatePrecision) {
		var ret string
		return ret
	}
	return *o.PublishedDatePrecision
}

// GetPublishedDatePrecisionOk returns a tuple with the PublishedDatePrecision field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ArticlesPropertyInner) GetPublishedDatePrecisionOk() (*string, bool) {
	if o == nil || isNil(o.PublishedDatePrecision) {
    return nil, false
	}
	return o.PublishedDatePrecision, true
}

// HasPublishedDatePrecision returns a boolean if a field has been set.
func (o *ArticlesPropertyInner) HasPublishedDatePrecision() bool {
	if o != nil && !isNil(o.PublishedDatePrecision) {
		return true
	}

	return false
}

// SetPublishedDatePrecision gets a reference to the given string and assigns it to the PublishedDatePrecision field.
func (o *ArticlesPropertyInner) SetPublishedDatePrecision(v string) {
	o.PublishedDatePrecision = &v
}

// GetUpdatedDate returns the UpdatedDate field value if set, zero value otherwise.
func (o *ArticlesPropertyInner) GetUpdatedDate() string {
	if o == nil || isNil(o.UpdatedDate) {
		var ret string
		return ret
	}
	return *o.UpdatedDate
}

// GetUpdatedDateOk returns a tuple with the UpdatedDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ArticlesPropertyInner) GetUpdatedDateOk() (*string, bool) {
	if o == nil || isNil(o.UpdatedDate) {
    return nil, false
	}
	return o.UpdatedDate, true
}

// HasUpdatedDate returns a boolean if a field has been set.
func (o *ArticlesPropertyInner) HasUpdatedDate() bool {
	if o != nil && !isNil(o.UpdatedDate) {
		return true
	}

	return false
}

// SetUpdatedDate gets a reference to the given string and assigns it to the UpdatedDate field.
func (o *ArticlesPropertyInner) SetUpdatedDate(v string) {
	o.UpdatedDate = &v
}

// GetUpdatedDatePrecision returns the UpdatedDatePrecision field value if set, zero value otherwise.
func (o *ArticlesPropertyInner) GetUpdatedDatePrecision() string {
	if o == nil || isNil(o.UpdatedDatePrecision) {
		var ret string
		return ret
	}
	return *o.UpdatedDatePrecision
}

// GetUpdatedDatePrecisionOk returns a tuple with the UpdatedDatePrecision field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ArticlesPropertyInner) GetUpdatedDatePrecisionOk() (*string, bool) {
	if o == nil || isNil(o.UpdatedDatePrecision) {
    return nil, false
	}
	return o.UpdatedDatePrecision, true
}

// HasUpdatedDatePrecision returns a boolean if a field has been set.
func (o *ArticlesPropertyInner) HasUpdatedDatePrecision() bool {
	if o != nil && !isNil(o.UpdatedDatePrecision) {
		return true
	}

	return false
}

// SetUpdatedDatePrecision gets a reference to the given string and assigns it to the UpdatedDatePrecision field.
func (o *ArticlesPropertyInner) SetUpdatedDatePrecision(v string) {
	o.UpdatedDatePrecision = &v
}

// GetParseDate returns the ParseDate field value if set, zero value otherwise.
func (o *ArticlesPropertyInner) GetParseDate() string {
	if o == nil || isNil(o.ParseDate) {
		var ret string
		return ret
	}
	return *o.ParseDate
}

// GetParseDateOk returns a tuple with the ParseDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ArticlesPropertyInner) GetParseDateOk() (*string, bool) {
	if o == nil || isNil(o.ParseDate) {
    return nil, false
	}
	return o.ParseDate, true
}

// HasParseDate returns a boolean if a field has been set.
func (o *ArticlesPropertyInner) HasParseDate() bool {
	if o != nil && !isNil(o.ParseDate) {
		return true
	}

	return false
}

// SetParseDate gets a reference to the given string and assigns it to the ParseDate field.
func (o *ArticlesPropertyInner) SetParseDate(v string) {
	o.ParseDate = &v
}

// GetLink returns the Link field value if set, zero value otherwise.
func (o *ArticlesPropertyInner) GetLink() string {
	if o == nil || isNil(o.Link) {
		var ret string
		return ret
	}
	return *o.Link
}

// GetLinkOk returns a tuple with the Link field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ArticlesPropertyInner) GetLinkOk() (*string, bool) {
	if o == nil || isNil(o.Link) {
    return nil, false
	}
	return o.Link, true
}

// HasLink returns a boolean if a field has been set.
func (o *ArticlesPropertyInner) HasLink() bool {
	if o != nil && !isNil(o.Link) {
		return true
	}

	return false
}

// SetLink gets a reference to the given string and assigns it to the Link field.
func (o *ArticlesPropertyInner) SetLink(v string) {
	o.Link = &v
}

// GetDomainUrl returns the DomainUrl field value if set, zero value otherwise.
func (o *ArticlesPropertyInner) GetDomainUrl() string {
	if o == nil || isNil(o.DomainUrl) {
		var ret string
		return ret
	}
	return *o.DomainUrl
}

// GetDomainUrlOk returns a tuple with the DomainUrl field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ArticlesPropertyInner) GetDomainUrlOk() (*string, bool) {
	if o == nil || isNil(o.DomainUrl) {
    return nil, false
	}
	return o.DomainUrl, true
}

// HasDomainUrl returns a boolean if a field has been set.
func (o *ArticlesPropertyInner) HasDomainUrl() bool {
	if o != nil && !isNil(o.DomainUrl) {
		return true
	}

	return false
}

// SetDomainUrl gets a reference to the given string and assigns it to the DomainUrl field.
func (o *ArticlesPropertyInner) SetDomainUrl(v string) {
	o.DomainUrl = &v
}

// GetFullDomainUrl returns the FullDomainUrl field value if set, zero value otherwise.
func (o *ArticlesPropertyInner) GetFullDomainUrl() string {
	if o == nil || isNil(o.FullDomainUrl) {
		var ret string
		return ret
	}
	return *o.FullDomainUrl
}

// GetFullDomainUrlOk returns a tuple with the FullDomainUrl field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ArticlesPropertyInner) GetFullDomainUrlOk() (*string, bool) {
	if o == nil || isNil(o.FullDomainUrl) {
    return nil, false
	}
	return o.FullDomainUrl, true
}

// HasFullDomainUrl returns a boolean if a field has been set.
func (o *ArticlesPropertyInner) HasFullDomainUrl() bool {
	if o != nil && !isNil(o.FullDomainUrl) {
		return true
	}

	return false
}

// SetFullDomainUrl gets a reference to the given string and assigns it to the FullDomainUrl field.
func (o *ArticlesPropertyInner) SetFullDomainUrl(v string) {
	o.FullDomainUrl = &v
}

// GetNameSource returns the NameSource field value if set, zero value otherwise.
func (o *ArticlesPropertyInner) GetNameSource() string {
	if o == nil || isNil(o.NameSource) {
		var ret string
		return ret
	}
	return *o.NameSource
}

// GetNameSourceOk returns a tuple with the NameSource field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ArticlesPropertyInner) GetNameSourceOk() (*string, bool) {
	if o == nil || isNil(o.NameSource) {
    return nil, false
	}
	return o.NameSource, true
}

// HasNameSource returns a boolean if a field has been set.
func (o *ArticlesPropertyInner) HasNameSource() bool {
	if o != nil && !isNil(o.NameSource) {
		return true
	}

	return false
}

// SetNameSource gets a reference to the given string and assigns it to the NameSource field.
func (o *ArticlesPropertyInner) SetNameSource(v string) {
	o.NameSource = &v
}

// GetIsHeadline returns the IsHeadline field value if set, zero value otherwise.
func (o *ArticlesPropertyInner) GetIsHeadline() string {
	if o == nil || isNil(o.IsHeadline) {
		var ret string
		return ret
	}
	return *o.IsHeadline
}

// GetIsHeadlineOk returns a tuple with the IsHeadline field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ArticlesPropertyInner) GetIsHeadlineOk() (*string, bool) {
	if o == nil || isNil(o.IsHeadline) {
    return nil, false
	}
	return o.IsHeadline, true
}

// HasIsHeadline returns a boolean if a field has been set.
func (o *ArticlesPropertyInner) HasIsHeadline() bool {
	if o != nil && !isNil(o.IsHeadline) {
		return true
	}

	return false
}

// SetIsHeadline gets a reference to the given string and assigns it to the IsHeadline field.
func (o *ArticlesPropertyInner) SetIsHeadline(v string) {
	o.IsHeadline = &v
}

// GetPaidContent returns the PaidContent field value if set, zero value otherwise.
func (o *ArticlesPropertyInner) GetPaidContent() bool {
	if o == nil || isNil(o.PaidContent) {
		var ret bool
		return ret
	}
	return *o.PaidContent
}

// GetPaidContentOk returns a tuple with the PaidContent field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ArticlesPropertyInner) GetPaidContentOk() (*bool, bool) {
	if o == nil || isNil(o.PaidContent) {
    return nil, false
	}
	return o.PaidContent, true
}

// HasPaidContent returns a boolean if a field has been set.
func (o *ArticlesPropertyInner) HasPaidContent() bool {
	if o != nil && !isNil(o.PaidContent) {
		return true
	}

	return false
}

// SetPaidContent gets a reference to the given bool and assigns it to the PaidContent field.
func (o *ArticlesPropertyInner) SetPaidContent(v bool) {
	o.PaidContent = &v
}

// GetExtractionData returns the ExtractionData field value if set, zero value otherwise.
func (o *ArticlesPropertyInner) GetExtractionData() string {
	if o == nil || isNil(o.ExtractionData) {
		var ret string
		return ret
	}
	return *o.ExtractionData
}

// GetExtractionDataOk returns a tuple with the ExtractionData field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ArticlesPropertyInner) GetExtractionDataOk() (*string, bool) {
	if o == nil || isNil(o.ExtractionData) {
    return nil, false
	}
	return o.ExtractionData, true
}

// HasExtractionData returns a boolean if a field has been set.
func (o *ArticlesPropertyInner) HasExtractionData() bool {
	if o != nil && !isNil(o.ExtractionData) {
		return true
	}

	return false
}

// SetExtractionData gets a reference to the given string and assigns it to the ExtractionData field.
func (o *ArticlesPropertyInner) SetExtractionData(v string) {
	o.ExtractionData = &v
}

// GetCountry returns the Country field value if set, zero value otherwise.
func (o *ArticlesPropertyInner) GetCountry() string {
	if o == nil || isNil(o.Country) {
		var ret string
		return ret
	}
	return *o.Country
}

// GetCountryOk returns a tuple with the Country field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ArticlesPropertyInner) GetCountryOk() (*string, bool) {
	if o == nil || isNil(o.Country) {
    return nil, false
	}
	return o.Country, true
}

// HasCountry returns a boolean if a field has been set.
func (o *ArticlesPropertyInner) HasCountry() bool {
	if o != nil && !isNil(o.Country) {
		return true
	}

	return false
}

// SetCountry gets a reference to the given string and assigns it to the Country field.
func (o *ArticlesPropertyInner) SetCountry(v string) {
	o.Country = &v
}

// GetRights returns the Rights field value if set, zero value otherwise.
func (o *ArticlesPropertyInner) GetRights() string {
	if o == nil || isNil(o.Rights) {
		var ret string
		return ret
	}
	return *o.Rights
}

// GetRightsOk returns a tuple with the Rights field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ArticlesPropertyInner) GetRightsOk() (*string, bool) {
	if o == nil || isNil(o.Rights) {
    return nil, false
	}
	return o.Rights, true
}

// HasRights returns a boolean if a field has been set.
func (o *ArticlesPropertyInner) HasRights() bool {
	if o != nil && !isNil(o.Rights) {
		return true
	}

	return false
}

// SetRights gets a reference to the given string and assigns it to the Rights field.
func (o *ArticlesPropertyInner) SetRights(v string) {
	o.Rights = &v
}

// GetRank returns the Rank field value if set, zero value otherwise.
func (o *ArticlesPropertyInner) GetRank() int32 {
	if o == nil || isNil(o.Rank) {
		var ret int32
		return ret
	}
	return *o.Rank
}

// GetRankOk returns a tuple with the Rank field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ArticlesPropertyInner) GetRankOk() (*int32, bool) {
	if o == nil || isNil(o.Rank) {
    return nil, false
	}
	return o.Rank, true
}

// HasRank returns a boolean if a field has been set.
func (o *ArticlesPropertyInner) HasRank() bool {
	if o != nil && !isNil(o.Rank) {
		return true
	}

	return false
}

// SetRank gets a reference to the given int32 and assigns it to the Rank field.
func (o *ArticlesPropertyInner) SetRank(v int32) {
	o.Rank = &v
}

// GetMedia returns the Media field value if set, zero value otherwise.
func (o *ArticlesPropertyInner) GetMedia() string {
	if o == nil || isNil(o.Media) {
		var ret string
		return ret
	}
	return *o.Media
}

// GetMediaOk returns a tuple with the Media field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ArticlesPropertyInner) GetMediaOk() (*string, bool) {
	if o == nil || isNil(o.Media) {
    return nil, false
	}
	return o.Media, true
}

// HasMedia returns a boolean if a field has been set.
func (o *ArticlesPropertyInner) HasMedia() bool {
	if o != nil && !isNil(o.Media) {
		return true
	}

	return false
}

// SetMedia gets a reference to the given string and assigns it to the Media field.
func (o *ArticlesPropertyInner) SetMedia(v string) {
	o.Media = &v
}

// GetLanguage returns the Language field value if set, zero value otherwise.
func (o *ArticlesPropertyInner) GetLanguage() string {
	if o == nil || isNil(o.Language) {
		var ret string
		return ret
	}
	return *o.Language
}

// GetLanguageOk returns a tuple with the Language field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ArticlesPropertyInner) GetLanguageOk() (*string, bool) {
	if o == nil || isNil(o.Language) {
    return nil, false
	}
	return o.Language, true
}

// HasLanguage returns a boolean if a field has been set.
func (o *ArticlesPropertyInner) HasLanguage() bool {
	if o != nil && !isNil(o.Language) {
		return true
	}

	return false
}

// SetLanguage gets a reference to the given string and assigns it to the Language field.
func (o *ArticlesPropertyInner) SetLanguage(v string) {
	o.Language = &v
}

// GetContent returns the Content field value if set, zero value otherwise.
func (o *ArticlesPropertyInner) GetContent() string {
	if o == nil || isNil(o.Content) {
		var ret string
		return ret
	}
	return *o.Content
}

// GetContentOk returns a tuple with the Content field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ArticlesPropertyInner) GetContentOk() (*string, bool) {
	if o == nil || isNil(o.Content) {
    return nil, false
	}
	return o.Content, true
}

// HasContent returns a boolean if a field has been set.
func (o *ArticlesPropertyInner) HasContent() bool {
	if o != nil && !isNil(o.Content) {
		return true
	}

	return false
}

// SetContent gets a reference to the given string and assigns it to the Content field.
func (o *ArticlesPropertyInner) SetContent(v string) {
	o.Content = &v
}

// GetWordCount returns the WordCount field value if set, zero value otherwise.
func (o *ArticlesPropertyInner) GetWordCount() int32 {
	if o == nil || isNil(o.WordCount) {
		var ret int32
		return ret
	}
	return *o.WordCount
}

// GetWordCountOk returns a tuple with the WordCount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ArticlesPropertyInner) GetWordCountOk() (*int32, bool) {
	if o == nil || isNil(o.WordCount) {
    return nil, false
	}
	return o.WordCount, true
}

// HasWordCount returns a boolean if a field has been set.
func (o *ArticlesPropertyInner) HasWordCount() bool {
	if o != nil && !isNil(o.WordCount) {
		return true
	}

	return false
}

// SetWordCount gets a reference to the given int32 and assigns it to the WordCount field.
func (o *ArticlesPropertyInner) SetWordCount(v int32) {
	o.WordCount = &v
}

// GetIsOpinion returns the IsOpinion field value if set, zero value otherwise.
func (o *ArticlesPropertyInner) GetIsOpinion() bool {
	if o == nil || isNil(o.IsOpinion) {
		var ret bool
		return ret
	}
	return *o.IsOpinion
}

// GetIsOpinionOk returns a tuple with the IsOpinion field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ArticlesPropertyInner) GetIsOpinionOk() (*bool, bool) {
	if o == nil || isNil(o.IsOpinion) {
    return nil, false
	}
	return o.IsOpinion, true
}

// HasIsOpinion returns a boolean if a field has been set.
func (o *ArticlesPropertyInner) HasIsOpinion() bool {
	if o != nil && !isNil(o.IsOpinion) {
		return true
	}

	return false
}

// SetIsOpinion gets a reference to the given bool and assigns it to the IsOpinion field.
func (o *ArticlesPropertyInner) SetIsOpinion(v bool) {
	o.IsOpinion = &v
}

// GetTwitterAccount returns the TwitterAccount field value if set, zero value otherwise.
func (o *ArticlesPropertyInner) GetTwitterAccount() string {
	if o == nil || isNil(o.TwitterAccount) {
		var ret string
		return ret
	}
	return *o.TwitterAccount
}

// GetTwitterAccountOk returns a tuple with the TwitterAccount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ArticlesPropertyInner) GetTwitterAccountOk() (*string, bool) {
	if o == nil || isNil(o.TwitterAccount) {
    return nil, false
	}
	return o.TwitterAccount, true
}

// HasTwitterAccount returns a boolean if a field has been set.
func (o *ArticlesPropertyInner) HasTwitterAccount() bool {
	if o != nil && !isNil(o.TwitterAccount) {
		return true
	}

	return false
}

// SetTwitterAccount gets a reference to the given string and assigns it to the TwitterAccount field.
func (o *ArticlesPropertyInner) SetTwitterAccount(v string) {
	o.TwitterAccount = &v
}

// GetAllLinks returns the AllLinks field value if set, zero value otherwise.
func (o *ArticlesPropertyInner) GetAllLinks() ArticlesPropertyInnerAllLinks {
	if o == nil || isNil(o.AllLinks) {
		var ret ArticlesPropertyInnerAllLinks
		return ret
	}
	return *o.AllLinks
}

// GetAllLinksOk returns a tuple with the AllLinks field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ArticlesPropertyInner) GetAllLinksOk() (*ArticlesPropertyInnerAllLinks, bool) {
	if o == nil || isNil(o.AllLinks) {
    return nil, false
	}
	return o.AllLinks, true
}

// HasAllLinks returns a boolean if a field has been set.
func (o *ArticlesPropertyInner) HasAllLinks() bool {
	if o != nil && !isNil(o.AllLinks) {
		return true
	}

	return false
}

// SetAllLinks gets a reference to the given ArticlesPropertyInnerAllLinks and assigns it to the AllLinks field.
func (o *ArticlesPropertyInner) SetAllLinks(v ArticlesPropertyInnerAllLinks) {
	o.AllLinks = &v
}

// GetAllDomainLinks returns the AllDomainLinks field value if set, zero value otherwise.
func (o *ArticlesPropertyInner) GetAllDomainLinks() ArticlesPropertyInnerAllDomainLinks {
	if o == nil || isNil(o.AllDomainLinks) {
		var ret ArticlesPropertyInnerAllDomainLinks
		return ret
	}
	return *o.AllDomainLinks
}

// GetAllDomainLinksOk returns a tuple with the AllDomainLinks field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ArticlesPropertyInner) GetAllDomainLinksOk() (*ArticlesPropertyInnerAllDomainLinks, bool) {
	if o == nil || isNil(o.AllDomainLinks) {
    return nil, false
	}
	return o.AllDomainLinks, true
}

// HasAllDomainLinks returns a boolean if a field has been set.
func (o *ArticlesPropertyInner) HasAllDomainLinks() bool {
	if o != nil && !isNil(o.AllDomainLinks) {
		return true
	}

	return false
}

// SetAllDomainLinks gets a reference to the given ArticlesPropertyInnerAllDomainLinks and assigns it to the AllDomainLinks field.
func (o *ArticlesPropertyInner) SetAllDomainLinks(v ArticlesPropertyInnerAllDomainLinks) {
	o.AllDomainLinks = &v
}

// GetNlp returns the Nlp field value if set, zero value otherwise.
func (o *ArticlesPropertyInner) GetNlp() map[string]interface{} {
	if o == nil || isNil(o.Nlp) {
		var ret map[string]interface{}
		return ret
	}
	return o.Nlp
}

// GetNlpOk returns a tuple with the Nlp field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ArticlesPropertyInner) GetNlpOk() (map[string]interface{}, bool) {
	if o == nil || isNil(o.Nlp) {
    return map[string]interface{}{}, false
	}
	return o.Nlp, true
}

// HasNlp returns a boolean if a field has been set.
func (o *ArticlesPropertyInner) HasNlp() bool {
	if o != nil && !isNil(o.Nlp) {
		return true
	}

	return false
}

// SetNlp gets a reference to the given map[string]interface{} and assigns it to the Nlp field.
func (o *ArticlesPropertyInner) SetNlp(v map[string]interface{}) {
	o.Nlp = v
}

// GetId returns the Id field value if set, zero value otherwise.
func (o *ArticlesPropertyInner) GetId() string {
	if o == nil || isNil(o.Id) {
		var ret string
		return ret
	}
	return *o.Id
}

// GetIdOk returns a tuple with the Id field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ArticlesPropertyInner) GetIdOk() (*string, bool) {
	if o == nil || isNil(o.Id) {
    return nil, false
	}
	return o.Id, true
}

// HasId returns a boolean if a field has been set.
func (o *ArticlesPropertyInner) HasId() bool {
	if o != nil && !isNil(o.Id) {
		return true
	}

	return false
}

// SetId gets a reference to the given string and assigns it to the Id field.
func (o *ArticlesPropertyInner) SetId(v string) {
	o.Id = &v
}

// GetScore returns the Score field value if set, zero value otherwise.
func (o *ArticlesPropertyInner) GetScore() float32 {
	if o == nil || isNil(o.Score) {
		var ret float32
		return ret
	}
	return *o.Score
}

// GetScoreOk returns a tuple with the Score field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ArticlesPropertyInner) GetScoreOk() (*float32, bool) {
	if o == nil || isNil(o.Score) {
    return nil, false
	}
	return o.Score, true
}

// HasScore returns a boolean if a field has been set.
func (o *ArticlesPropertyInner) HasScore() bool {
	if o != nil && !isNil(o.Score) {
		return true
	}

	return false
}

// SetScore gets a reference to the given float32 and assigns it to the Score field.
func (o *ArticlesPropertyInner) SetScore(v float32) {
	o.Score = &v
}

func (o ArticlesPropertyInner) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if !isNil(o.Title) {
		toSerialize["title"] = o.Title
	}
	if !isNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !isNil(o.Author) {
		toSerialize["author"] = o.Author
	}
	if !isNil(o.Authors) {
		toSerialize["authors"] = o.Authors
	}
	if !isNil(o.Journalists) {
		toSerialize["journalists"] = o.Journalists
	}
	if !isNil(o.PublishedDate) {
		toSerialize["published_date"] = o.PublishedDate
	}
	if !isNil(o.PublishedDatePrecision) {
		toSerialize["published_date_precision"] = o.PublishedDatePrecision
	}
	if !isNil(o.UpdatedDate) {
		toSerialize["updated_date"] = o.UpdatedDate
	}
	if !isNil(o.UpdatedDatePrecision) {
		toSerialize["updated_date_precision"] = o.UpdatedDatePrecision
	}
	if !isNil(o.ParseDate) {
		toSerialize["parse_date"] = o.ParseDate
	}
	if !isNil(o.Link) {
		toSerialize["link"] = o.Link
	}
	if !isNil(o.DomainUrl) {
		toSerialize["domain_url"] = o.DomainUrl
	}
	if !isNil(o.FullDomainUrl) {
		toSerialize["full_domain_url"] = o.FullDomainUrl
	}
	if !isNil(o.NameSource) {
		toSerialize["name_source"] = o.NameSource
	}
	if !isNil(o.IsHeadline) {
		toSerialize["is_headline"] = o.IsHeadline
	}
	if !isNil(o.PaidContent) {
		toSerialize["paid_content"] = o.PaidContent
	}
	if !isNil(o.ExtractionData) {
		toSerialize["extraction_data"] = o.ExtractionData
	}
	if !isNil(o.Country) {
		toSerialize["country"] = o.Country
	}
	if !isNil(o.Rights) {
		toSerialize["rights"] = o.Rights
	}
	if !isNil(o.Rank) {
		toSerialize["rank"] = o.Rank
	}
	if !isNil(o.Media) {
		toSerialize["media"] = o.Media
	}
	if !isNil(o.Language) {
		toSerialize["language"] = o.Language
	}
	if !isNil(o.Content) {
		toSerialize["content"] = o.Content
	}
	if !isNil(o.WordCount) {
		toSerialize["word_count"] = o.WordCount
	}
	if !isNil(o.IsOpinion) {
		toSerialize["is_opinion"] = o.IsOpinion
	}
	if !isNil(o.TwitterAccount) {
		toSerialize["twitter_account"] = o.TwitterAccount
	}
	if !isNil(o.AllLinks) {
		toSerialize["all_links"] = o.AllLinks
	}
	if !isNil(o.AllDomainLinks) {
		toSerialize["all_domain_links"] = o.AllDomainLinks
	}
	if !isNil(o.Nlp) {
		toSerialize["nlp"] = o.Nlp
	}
	if !isNil(o.Id) {
		toSerialize["id"] = o.Id
	}
	if !isNil(o.Score) {
		toSerialize["score"] = o.Score
	}
	return json.Marshal(toSerialize)
}

type NullableArticlesPropertyInner struct {
	value *ArticlesPropertyInner
	isSet bool
}

func (v NullableArticlesPropertyInner) Get() *ArticlesPropertyInner {
	return v.value
}

func (v *NullableArticlesPropertyInner) Set(val *ArticlesPropertyInner) {
	v.value = val
	v.isSet = true
}

func (v NullableArticlesPropertyInner) IsSet() bool {
	return v.isSet
}

func (v *NullableArticlesPropertyInner) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableArticlesPropertyInner(val *ArticlesPropertyInner) *NullableArticlesPropertyInner {
	return &NullableArticlesPropertyInner{value: val, isSet: true}
}

func (v NullableArticlesPropertyInner) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableArticlesPropertyInner) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


