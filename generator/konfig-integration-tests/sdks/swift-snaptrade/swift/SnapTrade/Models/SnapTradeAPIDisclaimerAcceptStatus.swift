//
// SnapTradeAPIDisclaimerAcceptStatus.swift
//
// Generated by Konfig
// https://konfigthis.com
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

/** Status of user acceptance of SnapTrade API disclaimer */
public struct SnapTradeAPIDisclaimerAcceptStatus: Codable, JSONEncodable, Hashable {

    public var accepted: Bool?
    public var timestamp: String?

    public init(accepted: Bool? = nil, timestamp: String? = nil) {
        self.accepted = accepted
        self.timestamp = timestamp
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case accepted
        case timestamp
    }

    public var additionalProperties: [String: AnyCodable] = [:]

    public subscript(key: String) -> AnyCodable? {
        get {
            if let value = additionalProperties[key] {
                return value
            }
            return nil
        }

        set {
            additionalProperties[key] = newValue
        }
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(accepted, forKey: .accepted)
        try container.encodeIfPresent(timestamp, forKey: .timestamp)
        var additionalPropertiesContainer = encoder.container(keyedBy: String.self)
        try additionalPropertiesContainer.encodeMap(additionalProperties)
    }

    // Decodable protocol methods

    public init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)

        accepted = try container.decodeIfPresent(Bool.self, forKey: .accepted)
        timestamp = try container.decodeIfPresent(String.self, forKey: .timestamp)
        var nonAdditionalPropertyKeys = Set<String>()
        nonAdditionalPropertyKeys.insert("accepted")
        nonAdditionalPropertyKeys.insert("timestamp")
        let additionalPropertiesContainer = try decoder.container(keyedBy: String.self)
        additionalProperties = try additionalPropertiesContainer.decodeMap(AnyCodable.self, excludedKeys: nonAdditionalPropertyKeys)
    }
}
