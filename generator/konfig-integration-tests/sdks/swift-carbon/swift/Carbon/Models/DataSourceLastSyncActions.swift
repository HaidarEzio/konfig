//
// DataSourceLastSyncActions.swift
//
// Generated by Konfig
// https://konfigthis.com
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public enum DataSourceLastSyncActions: String, Codable, CaseIterable {
    case add = "ADD"
    case update = "UPDATE"
    case cancel = "CANCEL"
    case revoke = "REVOKE"
}