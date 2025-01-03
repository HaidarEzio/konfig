/*
 * java-merge-anyof-object-schemas API
 * A simple API based for testing java-merge-anyof-object-schemas.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@example.com
 *
 * NOTE: This class is auto generated by Konfig (https://konfigthis.com).
 * Do not edit the class manually.
 */


package com.konfigthis.javamergeanyofobjectschemas.client.api;

import com.konfigthis.javamergeanyofobjectschemas.client.ApiException;
import com.konfigthis.javamergeanyofobjectschemas.client.ApiClient;
import com.konfigthis.javamergeanyofobjectschemas.client.ApiException;
import com.konfigthis.javamergeanyofobjectschemas.client.Configuration;
import com.konfigthis.javamergeanyofobjectschemas.client.model.A1;
import com.konfigthis.javamergeanyofobjectschemas.client.model.ABC;
import com.konfigthis.javamergeanyofobjectschemas.client.model.B1;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeAll;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for TestApi
 */
@Disabled
public class TestApiTest {

    private static TestApi api;

    
    @BeforeAll
    public static void beforeClass() {
        ApiClient apiClient = Configuration.getDefaultApiClient();
        api = new TestApi(apiClient);
    }

    /**
     * Fetches a JSON value based on input parameter
     *
     * Provide an input parameter to receive a JSON value with properties.
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void fetchTest() throws ApiException {
        ABC response = api.fetch()
                .execute();
        // TODO: test validations
    }

    /**
     * merge different
     *
     * merge different
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void mergeDifferentTest() throws ApiException {
        A1 response = api.mergeDifferent()
                .execute();
        // TODO: test validations
    }

    /**
     * merge same
     *
     * merge same
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void mergeSameTest() throws ApiException {
        B1 response = api.mergeSame()
                .execute();
        // TODO: test validations
    }

}
