/*
 * OpenAPI Petstore
 *
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */

using System;
using System.IO;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Reflection;
using RestSharp;
using NUnit.Framework;

using Com.Demo.Client;
using Com.Demo.Api;
using Com.Demo.Model;

namespace Com.Demo.Test
{
    /// <summary>
    ///  Class for testing StoreApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by OpenAPI Generator (https://openapi-generator.tech).
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    public class StoreApiTests
    {
        private StoreApi instance;

        /// <summary>
        /// Setup before each unit test
        /// </summary>
        [SetUp]
        public void Init()
        {
            instance = new StoreApi();
        }

        /// <summary>
        /// Clean up after each unit test
        /// </summary>
        [TearDown]
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of StoreApi
        /// </summary>
        [Test]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsInstanceOf' StoreApi
            //Assert.IsInstanceOf(typeof(StoreApi), instance);
        }

        
        /// <summary>
        /// Test DeleteOrder
        /// </summary>
        [Test]
        public void DeleteOrderTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string orderId = null;
            //instance.DeleteOrder(orderId);
            
        }
        
        /// <summary>
        /// Test GetInventory
        /// </summary>
        [Test]
        public void GetInventoryTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //var response = instance.GetInventory();
            //Assert.IsInstanceOf(typeof(Dictionary<string, int>), response, "response is Dictionary<string, int>");
        }
        
        /// <summary>
        /// Test GetOrderById
        /// </summary>
        [Test]
        public void GetOrderByIdTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //long orderId = null;
            //var response = instance.GetOrderById(orderId);
            //Assert.IsInstanceOf(typeof(Order), response, "response is Order");
        }
        
    }

}
