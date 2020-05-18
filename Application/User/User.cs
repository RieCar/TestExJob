namespace Application.User
{
    public class User
    {
        public string DisplayName { get; set; }
        public string Token { get; set; }

        public string Organisation { get; set; }

        public string UserName { get; set; }

        public bool IsValidCMS { get; set; }

        public string Email { get; set; }

        public string Error { get; set; }

        public string Password { get; set; }
    }
}