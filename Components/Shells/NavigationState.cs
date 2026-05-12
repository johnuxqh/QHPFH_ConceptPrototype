namespace QHPFH_ConceptPrototype.Components.Shells;

public sealed class NavigationState
{
    public string ActivePrimaryKey { get; private set; } = "dd";
    public string ActiveSubItem { get; private set; } = "DD Hub";

    public event Action? Changed;

    public void SetActive(string primaryKey, string subItem)
    {
        ActivePrimaryKey = primaryKey;
        ActiveSubItem = subItem;
        Changed?.Invoke();
    }
}
