//
// WebFirebaseCloudMessaging.swift
//
// Generated by Konfig
// https://konfigthis.com
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct WebFirebaseCloudMessaging: Codable, JSONEncodable, Hashable {

    public var projectId: String?
    public var appId: String?
    public var token: String?

    public init(projectId: String? = nil, appId: String? = nil, token: String? = nil) {
        self.projectId = projectId
        self.appId = appId
        self.token = token
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case projectId
        case appId
        case token
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(projectId, forKey: .projectId)
        try container.encodeIfPresent(appId, forKey: .appId)
        try container.encodeIfPresent(token, forKey: .token)
    }
}
