/*
NewsCatcher-V3 Production API

<img src='https://uploads-ssl.webflow.com/6429857b17973b636c2195c5/646c6f1eb774ff2f2997bec5_newscatcher_.svg' width='286' height='35' /> <br>  <br>Visit our website  <a href='https://newscatcherapi.com'>https://newscatcherapi.com</a>

The version of the OpenAPI document: 3.2.16
Contact: maksym@newscatcherapi.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import { AxiosRequestConfig } from "axios";
import {
  AuthorsApi,
  LatestHeadlinesApi,
  SearchApi,
  SearchLinkApi,
  SearchSimilarApi,
  SourcesApi,
  SubscriptionApi,
} from "./api";
import { Configuration, ConfigurationParameters } from "./configuration";
import { NewscatcherCustom } from "./client-custom";

export class Newscatcher extends NewscatcherCustom {
  readonly authors: AuthorsApi;
  readonly latestHeadlines: LatestHeadlinesApi;
  readonly search: SearchApi;
  readonly searchLink: SearchLinkApi;
  readonly searchSimilar: SearchSimilarApi;
  readonly sources: SourcesApi;
  readonly subscription: SubscriptionApi;

  constructor(configurationParameters: ConfigurationParameters) {
    super(configurationParameters);
    const configuration = new Configuration(configurationParameters);
    this.authors = new AuthorsApi(configuration);
    this.latestHeadlines = new LatestHeadlinesApi(configuration);
    this.search = new SearchApi(configuration);
    this.searchLink = new SearchLinkApi(configuration);
    this.searchSimilar = new SearchSimilarApi(configuration);
    this.sources = new SourcesApi(configuration);
    this.subscription = new SubscriptionApi(configuration);
  }

}