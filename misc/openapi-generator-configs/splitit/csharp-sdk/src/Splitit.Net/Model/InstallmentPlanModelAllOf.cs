/*
 * splitit-web-api-v3
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */

using System;
using System.Linq;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = Splitit.Net.Client.OpenAPIDateConverter;

namespace Splitit.Net.Model
{
    /// <summary>
    /// InstallmentPlanModelAllOf
    /// </summary>
    [DataContract]
    public partial class InstallmentPlanModelAllOf :  IEquatable<InstallmentPlanModelAllOf>, IValidatableObject
    {
        /// <summary>
        /// Gets or Sets PurchaseMethod
        /// </summary>
        [DataMember(Name="PurchaseMethod", EmitDefaultValue=false)]
        public PurchaseMethod? PurchaseMethod { get; set; }
        /// <summary>
        /// Gets or Sets Status
        /// </summary>
        [DataMember(Name="Status", EmitDefaultValue=true)]
        public PlanStatus Status { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="InstallmentPlanModelAllOf" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected InstallmentPlanModelAllOf() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="InstallmentPlanModelAllOf" /> class.
        /// </summary>
        /// <param name="installmentPlanNumber">installmentPlanNumber.</param>
        /// <param name="refOrderNumber">refOrderNumber.</param>
        /// <param name="purchaseMethod">purchaseMethod.</param>
        /// <param name="status">status (required).</param>
        /// <param name="currency">currency.</param>
        /// <param name="originalAmount">originalAmount.</param>
        /// <param name="amount">amount.</param>
        /// <param name="extendedParams">extendedParams.</param>
        /// <param name="authorization">authorization.</param>
        /// <param name="shopper">shopper.</param>
        /// <param name="billingAddress">billingAddress.</param>
        /// <param name="paymentMethod">paymentMethod.</param>
        /// <param name="installments">installments.</param>
        /// <param name="links">links.</param>
        public InstallmentPlanModelAllOf(string installmentPlanNumber = default(string), string refOrderNumber = default(string), PurchaseMethod? purchaseMethod = default(PurchaseMethod?), PlanStatus status = default(PlanStatus), string currency = default(string), decimal originalAmount = default(decimal), decimal amount = default(decimal), Dictionary<string, string> extendedParams = default(Dictionary<string, string>), AuthorizationModel authorization = default(AuthorizationModel), ShopperData shopper = default(ShopperData), AddressData billingAddress = default(AddressData), PaymentMethodModel paymentMethod = default(PaymentMethodModel), List<Installment> installments = default(List<Installment>), LinksData links = default(LinksData))
        {
            // to ensure "status" is required (not null)
            if (status == null)
            {
                throw new InvalidDataException("status is a required property for InstallmentPlanModelAllOf and cannot be null");
            }
            else
            {
                this.Status = status;
            }

            this.InstallmentPlanNumber = installmentPlanNumber;
            this.RefOrderNumber = refOrderNumber;
            this.PurchaseMethod = purchaseMethod;
            this.Currency = currency;
            this.OriginalAmount = originalAmount;
            this.Amount = amount;
            this.ExtendedParams = extendedParams;
            this.Authorization = authorization;
            this.Shopper = shopper;
            this.BillingAddress = billingAddress;
            this.PaymentMethod = paymentMethod;
            this.Installments = installments;
            this.Links = links;
        }

        /// <summary>
        /// Gets or Sets InstallmentPlanNumber
        /// </summary>
        [DataMember(Name="InstallmentPlanNumber", EmitDefaultValue=false)]
        public string InstallmentPlanNumber { get; set; }

        /// <summary>
        /// Gets or Sets RefOrderNumber
        /// </summary>
        [DataMember(Name="RefOrderNumber", EmitDefaultValue=false)]
        public string RefOrderNumber { get; set; }



        /// <summary>
        /// Gets or Sets Currency
        /// </summary>
        [DataMember(Name="Currency", EmitDefaultValue=false)]
        public string Currency { get; set; }

        /// <summary>
        /// Gets or Sets OriginalAmount
        /// </summary>
        [DataMember(Name="OriginalAmount", EmitDefaultValue=false)]
        public decimal OriginalAmount { get; set; }

        /// <summary>
        /// Gets or Sets Amount
        /// </summary>
        [DataMember(Name="Amount", EmitDefaultValue=false)]
        public decimal Amount { get; set; }

        /// <summary>
        /// Gets or Sets ExtendedParams
        /// </summary>
        [DataMember(Name="ExtendedParams", EmitDefaultValue=false)]
        public Dictionary<string, string> ExtendedParams { get; set; }

        /// <summary>
        /// Gets or Sets Authorization
        /// </summary>
        [DataMember(Name="Authorization", EmitDefaultValue=false)]
        public AuthorizationModel Authorization { get; set; }

        /// <summary>
        /// Gets or Sets Shopper
        /// </summary>
        [DataMember(Name="Shopper", EmitDefaultValue=false)]
        public ShopperData Shopper { get; set; }

        /// <summary>
        /// Gets or Sets BillingAddress
        /// </summary>
        [DataMember(Name="BillingAddress", EmitDefaultValue=false)]
        public AddressData BillingAddress { get; set; }

        /// <summary>
        /// Gets or Sets PaymentMethod
        /// </summary>
        [DataMember(Name="PaymentMethod", EmitDefaultValue=false)]
        public PaymentMethodModel PaymentMethod { get; set; }

        /// <summary>
        /// Gets or Sets Installments
        /// </summary>
        [DataMember(Name="Installments", EmitDefaultValue=false)]
        public List<Installment> Installments { get; set; }

        /// <summary>
        /// Gets or Sets Links
        /// </summary>
        [DataMember(Name="Links", EmitDefaultValue=false)]
        public LinksData Links { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class InstallmentPlanModelAllOf {\n");
            sb.Append("  InstallmentPlanNumber: ").Append(InstallmentPlanNumber).Append("\n");
            sb.Append("  RefOrderNumber: ").Append(RefOrderNumber).Append("\n");
            sb.Append("  PurchaseMethod: ").Append(PurchaseMethod).Append("\n");
            sb.Append("  Status: ").Append(Status).Append("\n");
            sb.Append("  Currency: ").Append(Currency).Append("\n");
            sb.Append("  OriginalAmount: ").Append(OriginalAmount).Append("\n");
            sb.Append("  Amount: ").Append(Amount).Append("\n");
            sb.Append("  ExtendedParams: ").Append(ExtendedParams).Append("\n");
            sb.Append("  Authorization: ").Append(Authorization).Append("\n");
            sb.Append("  Shopper: ").Append(Shopper).Append("\n");
            sb.Append("  BillingAddress: ").Append(BillingAddress).Append("\n");
            sb.Append("  PaymentMethod: ").Append(PaymentMethod).Append("\n");
            sb.Append("  Installments: ").Append(Installments).Append("\n");
            sb.Append("  Links: ").Append(Links).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return Newtonsoft.Json.JsonConvert.SerializeObject(this, Newtonsoft.Json.Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as InstallmentPlanModelAllOf);
        }

        /// <summary>
        /// Returns true if InstallmentPlanModelAllOf instances are equal
        /// </summary>
        /// <param name="input">Instance of InstallmentPlanModelAllOf to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InstallmentPlanModelAllOf input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.InstallmentPlanNumber == input.InstallmentPlanNumber ||
                    (this.InstallmentPlanNumber != null &&
                    this.InstallmentPlanNumber.Equals(input.InstallmentPlanNumber))
                ) && 
                (
                    this.RefOrderNumber == input.RefOrderNumber ||
                    (this.RefOrderNumber != null &&
                    this.RefOrderNumber.Equals(input.RefOrderNumber))
                ) && 
                (
                    this.PurchaseMethod == input.PurchaseMethod ||
                    (this.PurchaseMethod != null &&
                    this.PurchaseMethod.Equals(input.PurchaseMethod))
                ) && 
                (
                    this.Status == input.Status ||
                    (this.Status != null &&
                    this.Status.Equals(input.Status))
                ) && 
                (
                    this.Currency == input.Currency ||
                    (this.Currency != null &&
                    this.Currency.Equals(input.Currency))
                ) && 
                (
                    this.OriginalAmount == input.OriginalAmount ||
                    (this.OriginalAmount != null &&
                    this.OriginalAmount.Equals(input.OriginalAmount))
                ) && 
                (
                    this.Amount == input.Amount ||
                    (this.Amount != null &&
                    this.Amount.Equals(input.Amount))
                ) && 
                (
                    this.ExtendedParams == input.ExtendedParams ||
                    this.ExtendedParams != null &&
                    input.ExtendedParams != null &&
                    this.ExtendedParams.SequenceEqual(input.ExtendedParams)
                ) && 
                (
                    this.Authorization == input.Authorization ||
                    (this.Authorization != null &&
                    this.Authorization.Equals(input.Authorization))
                ) && 
                (
                    this.Shopper == input.Shopper ||
                    (this.Shopper != null &&
                    this.Shopper.Equals(input.Shopper))
                ) && 
                (
                    this.BillingAddress == input.BillingAddress ||
                    (this.BillingAddress != null &&
                    this.BillingAddress.Equals(input.BillingAddress))
                ) && 
                (
                    this.PaymentMethod == input.PaymentMethod ||
                    (this.PaymentMethod != null &&
                    this.PaymentMethod.Equals(input.PaymentMethod))
                ) && 
                (
                    this.Installments == input.Installments ||
                    this.Installments != null &&
                    input.Installments != null &&
                    this.Installments.SequenceEqual(input.Installments)
                ) && 
                (
                    this.Links == input.Links ||
                    (this.Links != null &&
                    this.Links.Equals(input.Links))
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                if (this.InstallmentPlanNumber != null)
                    hashCode = hashCode * 59 + this.InstallmentPlanNumber.GetHashCode();
                if (this.RefOrderNumber != null)
                    hashCode = hashCode * 59 + this.RefOrderNumber.GetHashCode();
                if (this.PurchaseMethod != null)
                    hashCode = hashCode * 59 + this.PurchaseMethod.GetHashCode();
                if (this.Status != null)
                    hashCode = hashCode * 59 + this.Status.GetHashCode();
                if (this.Currency != null)
                    hashCode = hashCode * 59 + this.Currency.GetHashCode();
                if (this.OriginalAmount != null)
                    hashCode = hashCode * 59 + this.OriginalAmount.GetHashCode();
                if (this.Amount != null)
                    hashCode = hashCode * 59 + this.Amount.GetHashCode();
                if (this.ExtendedParams != null)
                    hashCode = hashCode * 59 + this.ExtendedParams.GetHashCode();
                if (this.Authorization != null)
                    hashCode = hashCode * 59 + this.Authorization.GetHashCode();
                if (this.Shopper != null)
                    hashCode = hashCode * 59 + this.Shopper.GetHashCode();
                if (this.BillingAddress != null)
                    hashCode = hashCode * 59 + this.BillingAddress.GetHashCode();
                if (this.PaymentMethod != null)
                    hashCode = hashCode * 59 + this.PaymentMethod.GetHashCode();
                if (this.Installments != null)
                    hashCode = hashCode * 59 + this.Installments.GetHashCode();
                if (this.Links != null)
                    hashCode = hashCode * 59 + this.Links.GetHashCode();
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

}
