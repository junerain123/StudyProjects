using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace LearnEFCore.Model
{
    public class Player
    {
        // 球员
        public Player()
        {
            GamePlayers = new List<GamePlayer>();
        }

        // 0 编号
        public int Id { get; set; }

        // 1 姓名
        public string Name { get; set; }

        // 2 生日
        [Column(TypeName = "date")]
        public DateTime DateOfBirth { get; set; }

        // 3 【导航属性】 比赛+选手
        public List<GamePlayer> GamePlayers { get; set; }

        // 4 【导航属性】简历
        public int ResumeId { get; set; }
        public Resume Resume { get; set; }
    }
}