using QHPFH_ConceptPrototype.Models;

namespace QHPFH_ConceptPrototype.Data;

public static class DemoReferenceData
{
    public const string All = "All";

    public static readonly IReadOnlyList<HhsRecord> HhsRecords =
    [
        new("Cairns and Hinterland", ["Cairns Hospital", "Innisfail Hospital", "Mareeba Hospital"]),
        new("Central Queensland", ["Rockhampton Hospital", "Gladstone Hospital", "Emerald Hospital"]),
        new("Central West", ["Longreach Hospital", "Blackall Hospital"]),
        new("Children’s Health Queensland", ["Queensland Children’s Hospital"]),
        new("Darling Downs", ["Toowoomba Hospital", "Dalby Hospital"]),
        new("Gold Coast", ["Gold Coast University Hospital", "Robina Hospital"]),
        new("Mackay", ["Mackay Base Hospital", "Sarina Hospital"]),
        new("Metro North", ["Royal Brisbane and Women's Hospital", "Redcliffe Hospital", "Caboolture Hospital"]),
        new("Metro South", ["Princess Alexandra Hospital", "QEII Jubilee Hospital", "Logan Hospital"]),
        new("North West", ["Mount Isa Hospital"]),
        new("South West", ["Roma Hospital", "Charleville Hospital"]),
        new("Sunshine Coast", ["Sunshine Coast University Hospital", "Nambour General Hospital"]),
        new("Torres and Cape", ["Thursday Island Hospital", "Cooktown Hospital"]),
        new("Townsville", ["Townsville University Hospital", "Ayr Hospital"]),
        new("West Moreton", ["Ipswich Hospital", "Gatton Hospital"]),
        new("Wide Bay", ["Bundaberg Hospital", "Hervey Bay Hospital"])
    ];

    public static IReadOnlyDictionary<string, List<string>> FacilitiesByHhs => HhsRecords.ToDictionary(x => x.Name, x => x.Facilities.ToList());
    public static IReadOnlyList<string> HhsOptions => [All, ..HhsRecords.Select(x => x.Name)];
}
