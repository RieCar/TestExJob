namespace Domain
{
    public class Contact
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
         public string Titel { get; set; }
         public bool IsUser { get; set; }
         public string Email { get; set; }
         public Organisation Organisation { get; set; }
         public string Password { get; set; }
    }
}