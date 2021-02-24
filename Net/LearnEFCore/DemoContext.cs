using LearnEFCore.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace LearnEFCore
{
    class DemoContext:DbContext
    {
        public DemoContext()
        {
            // 设置 默认 不追踪数据
            //ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=(localdb)\\MSSQLLocalDB; Initial Catalog=Demo");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // 设置联合组键
            modelBuilder.Entity<GamePlayer>().HasKey(gp => new { gp.PlayerId, gp.GameId });

            modelBuilder.Entity<Resume>()
                .HasOne(r => r.Player)
                .WithOne(p => p.Resume)
                .HasForeignKey<Resume>(r => r.PlayerId);
        }

        public DbSet<League> Leagues { get; set; }
        public DbSet<Club> Clubs { get; set; }
        public DbSet<Player> Players { get; set; }
    }
}
