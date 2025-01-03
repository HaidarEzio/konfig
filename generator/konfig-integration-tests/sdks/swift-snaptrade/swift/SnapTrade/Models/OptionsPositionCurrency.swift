//
// OptionsPositionCurrency.swift
//
// Generated by Konfig
// https://konfigthis.com
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct OptionsPositionCurrency: Codable, JSONEncodable, Hashable {

    public var id: String?
    public var code: String?
    public var name: String?

    public init(id: String? = nil, code: String? = nil, name: String? = nil) {
        self.id = id
        self.code = code
        self.name = name
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case id
        case code
        case name
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(id, forKey: .id)
        try container.encodeIfPresent(code, forKey: .code)
        try container.encodeIfPresent(name, forKey: .name)
    }
}

