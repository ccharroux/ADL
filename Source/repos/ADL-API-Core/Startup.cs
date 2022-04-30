using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using ADLAPICore.Library.Accomplishments;
using ADLAPICore.Library.Game;
using ADLAPICore.Library.Login;
using ADLAPICore.Library.Member;
using ADLAPICore.Library.Messages;
using ADLAPICore.Library.Notifications;
using ADLAPICore.Library.Sports;
using ADLAPICore.Library.Stats;
using ADLAPICore.Library.Facility;
using ADLAPICore.Library.State;
using ADLAPICore.Library.Country;
using ADLAPICore.Library.Patient;
using ADLAPICore.Library.UserMember;
using ADLAPICore.Library.ADL;
using ADLAPICore.Library.Role;

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



            services.AddTransient<IADLClass, ADLClass>();
            services.AddTransient<ICountryClass, CountryClass>();
            services.AddTransient<IFacilityClass, FacilityClass>();
            services.AddTransient<ILoginClass, LoginClass>();
            services.AddTransient<IPatientClass, PatientClass>();
            services.AddTransient<IRoleClass, RoleClass>();
            services.AddTransient<IStateClass, StateClass>();
            services.AddTransient<IUserMemberClass, UserMemberClass>();

            services.AddTransient<IAccomplishmentsClass, AccomplishmentsClass>();
            services.AddTransient<IGameClass, GameClass>();
            services.AddTransient<IMemberClass, MemberClass>();
            services.AddTransient<IMessagesClass, MessagesClass>();
            services.AddTransient<INotificationsClass, NotificationsClass>();
            services.AddTransient<ISportsClass, SportsClass>();
            services.AddTransient<IStatsClass, StatsClass>();

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
