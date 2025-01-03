/*
 * csharp-nullable-ref-using-all-of-schema API
 *
 * A simple API based for testing csharp-nullable-ref-using-all-of-schema.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@example.com
 * Generated by: https://konfigthis.com
 */


using System;

namespace CsharpNullableRefUsingAllOfSchema.Net.Client
{
    /// <summary>
    /// Generic ClientException that occurs even in case of successful response
    /// </summary>
    public class ClientException : Exception
    {

        /// <summary>
        /// Response object that caused the exception
        /// </summary>
        public IApiResponse Response { get; set; }

        /// <summary>
        /// Initializes a new instance of the <see cref="ClientException"/> class.
        /// </summary>
        public ClientException(IApiResponse response, Exception innerException) : base("Error while deserialization response", innerException)
        {
            this.Response = response;
        }
    }

}
