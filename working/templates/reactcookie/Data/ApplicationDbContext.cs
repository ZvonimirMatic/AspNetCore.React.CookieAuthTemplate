using Microsoft.EntityFrameworkCore;
using Placeholder.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace Placeholder.Data;

public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
{
    public ApplicationDbContext(DbContextOptions options)
        : base(options)
    {

    }
}
