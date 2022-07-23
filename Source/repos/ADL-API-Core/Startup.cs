using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using ADLAPICore.Library.Login;
using ADLAPICore.Library.Facility;
using ADLAPICore.Library.State;
using ADLAPICore.Library.Country;
using ADLAPICore.Library.Patient;
using ADLAPICore.Library.UserMember;
using ADLAPICore.Library.ADL;
using ADLAPICore.Library.Role;
using ADLAPICore.Library.Address;
using ADLAPICore.Library.Password;
using ADLAPICore.Library.Form;

namespace ADLAPICore
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
 
        }

        public static IConfiguration Configuration { get; set; }
 
        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Classes for depenency injection
            services.AddTransient<IAddressClass, AddressClass>();
            services.AddTransient<IADLClass, ADLClass>();
            services.AddTransient<ICountryClass, CountryClass>();
            services.AddTransient<IFacilityClass, FacilityClass>();
            services.AddTransient<IFormClass, FormClass>();
            services.AddTransient<ILoginClass, LoginClass>();
            services.AddTransient<IPatientClass, PatientClass>();
            services.AddTransient<IRoleClass, RoleClass>();
            services.AddTransient<IStateClass, StateClass>();
            services.AddTransient<IUserMemberClass, UserMemberClass>();
            services.AddTransient<IPasswordClass, PasswordClass>();

            // Cors
            services.AddCors(options =>
            {
                options.AddPolicy(
                  "CorsPolicy",
                  builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
                 
            });
            
            // controllers
            services.AddControllers();
            
            // mvc core
            services.AddMvcCore(options =>
                {
                     options.RespectBrowserAcceptHeader = true; // false by default
                });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseCors("CorsPolicy");
            app.UseHttpsRedirection();
            app.UseRouting();
            app.UseAuthorization();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }

 
    }
}
