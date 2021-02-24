using System;
using System.Collections.Generic;
using System.Text;

namespace LearnEFCore.Model
{
    public class Game
    {
        // 比赛
        public Game()
        {
            GamePlayers = new List<GamePlayer>();
        }

        // 0 编号
        public int Id { get; set; }

        // 1 回合
        public int Round { get; set; }

        // 2 开始日期
        public DateTimeOffset? StartTime { get; set; }

        // 3 【导航属性】 GamePlayers
        public List<GamePlayer> GamePlayers { get; set; }
    }
}
