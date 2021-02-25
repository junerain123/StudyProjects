using Microsoft.AspNetCore.Components;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blazor.WebAssembly.Components
{
    public partial class Home
    {
        [Parameter]
        public string Title { get; set; }

        [Parameter(CaptureUnmatchedValues = true)]
        public Dictionary<string, object> AdditionalAttributes { get; set; }

        //color是上级组件传递来的，依据string类型
        [CascadingParameter]
        public string Color { get; set; }

        //如果父组件中传参没有指定参数名，则ChildContent的名称是固定的
        [Parameter]
        public RenderFragment ChildContent { get; set; }

        //如果父组件中传参指定了参数名HeadContent
        [Parameter]
        public RenderFragment HeadContent { get; set; }
    }
}
