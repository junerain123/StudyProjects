using System;
using System.Collections.Generic;
using System.Text;

namespace LearnEFCore.Model
{
    public class GamePlayer
    {
        // 0 编号 组合主键
        public int PlayerId { get; set; }
        public int GameId { get; set; }

        public Game Game { get; set; }
        public Player Player { get; set; }
    }
}
