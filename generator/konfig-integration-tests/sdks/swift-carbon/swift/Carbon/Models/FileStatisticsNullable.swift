//
// FileStatisticsNullable.swift
//
// Generated by Konfig
// https://konfigthis.com
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct FileStatisticsNullable: Codable, JSONEncodable, Hashable {

    public var fileFormat: FileFormatsNullable?
    public var fileSize: Int?
    public var numCharacters: Int?
    public var numTokens: Int?
    public var numEmbeddings: Int?

    public init(fileFormat: FileFormatsNullable?, fileSize: Int?, numCharacters: Int?, numTokens: Int?, numEmbeddings: Int?) {
        self.fileFormat = fileFormat
        self.fileSize = fileSize
        self.numCharacters = numCharacters
        self.numTokens = numTokens
        self.numEmbeddings = numEmbeddings
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case fileFormat = "file_format"
        case fileSize = "file_size"
        case numCharacters = "num_characters"
        case numTokens = "num_tokens"
        case numEmbeddings = "num_embeddings"
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(fileFormat, forKey: .fileFormat)
        try container.encode(fileSize, forKey: .fileSize)
        try container.encode(numCharacters, forKey: .numCharacters)
        try container.encode(numTokens, forKey: .numTokens)
        try container.encode(numEmbeddings, forKey: .numEmbeddings)
    }
}

