using QHPFH_ConceptPrototype.Models;

namespace QHPFH_ConceptPrototype.Data;

public static class DemoHubData
{
    public static List<PatientAdmission> BuildPatientAdmissions()
    {
        var names = new[]{("Clark","Kent"),("Bruce","Wayne"),("Diana","Prince"),("Barry","Allen"),("Peter","Parker"),("Tony","Stark"),("Natasha","Romanoff"),("Matt","Murdock"),("Jessica","Jones"),("Steve","Rogers"),("Gwen","Stacy"),("Reed","Richards"),("Jean","Grey")};
        var rand = new Random(84);
        var statuses = new[]{"Queued","In Transit","Admitted","Complete"};
        return Enumerable.Range(1, 52).Select(i =>
        {
            var n = names[i % names.Length];
            return new PatientAdmission($"PT-{i:0000}", n.Item1, n.Item2, rand.Next(1, 93), rand.NextDouble() > 0.52 ? "F" : "M", rand.NextDouble() > 0.5 ? "ED" : "Elective", "Metro North", "Royal Brisbane and Women's Hospital", "General Medicine", rand.NextDouble()>0.6?"ICU":"Surgical", statuses[rand.Next(statuses.Length)], DateTime.UtcNow.AddHours(-rand.Next(1, 16)).ToString("HH:mm"), DateTime.UtcNow.AddMinutes(rand.Next(20, 280)).ToString("HH:mm"), rand.NextDouble()>0.5?"Acute respiratory decompensation":"Post-op bed request", rand.NextDouble()>0.75, rand.NextDouble()>0.82, rand.NextDouble()>0.85, rand.Next(0, 5));
        }).ToList();
    }
}
