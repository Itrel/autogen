"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8603],{7992:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var a=t(5893),s=t(1151);const r={sidebar_label:"groupchat",title:"agentchat.groupchat"},l=void 0,c={id:"reference/agentchat/groupchat",title:"agentchat.groupchat",description:"GroupChat Objects",source:"@site/docs/reference/agentchat/groupchat.md",sourceDirName:"reference/agentchat",slug:"/reference/agentchat/groupchat",permalink:"/autogen/docs/reference/agentchat/groupchat",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/reference/agentchat/groupchat.md",tags:[],version:"current",frontMatter:{sidebar_label:"groupchat",title:"agentchat.groupchat"},sidebar:"referenceSideBar",previous:{title:"conversable_agent",permalink:"/autogen/docs/reference/agentchat/conversable_agent"},next:{title:"user_proxy_agent",permalink:"/autogen/docs/reference/agentchat/user_proxy_agent"}},i={},o=[{value:"GroupChat Objects",id:"groupchat-objects",level:2},{value:"agent_names",id:"agent_names",level:4},{value:"reset",id:"reset",level:4},{value:"append",id:"append",level:4},{value:"agent_by_name",id:"agent_by_name",level:4},{value:"next_agent",id:"next_agent",level:4},{value:"select_speaker_msg",id:"select_speaker_msg",level:4},{value:"select_speaker_prompt",id:"select_speaker_prompt",level:4},{value:"manual_select_speaker",id:"manual_select_speaker",level:4},{value:"select_speaker",id:"select_speaker",level:4},{value:"a_select_speaker",id:"a_select_speaker",level:4},{value:"GroupChatManager Objects",id:"groupchatmanager-objects",level:2},{value:"run_chat",id:"run_chat",level:4},{value:"a_run_chat",id:"a_run_chat",level:4}];function h(e){const n={code:"code",em:"em",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"groupchat-objects",children:"GroupChat Objects"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"@dataclass\nclass GroupChat()\n"})}),"\n",(0,a.jsx)(n.p,{children:"(In preview) A group chat class that contains the following data fields:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"agents: a list of participating agents."}),"\n",(0,a.jsx)(n.li,{children:"messages: a list of messages in the group chat."}),"\n",(0,a.jsx)(n.li,{children:"max_round: the maximum number of rounds."}),"\n",(0,a.jsx)(n.li,{children:'admin_name: the name of the admin agent if there is one. Default is "Admin".\nKeyBoardInterrupt will make the admin agent take over.'}),"\n",(0,a.jsxs)(n.li,{children:["func_call_filter: whether to enforce function call filter. Default is True.\nWhen set to True and when a message is a function call suggestion,\nthe next speaker will be chosen from an agent which contains the corresponding function name\nin its ",(0,a.jsx)(n.code,{children:"function_map"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:['speaker_selection_method: the method for selecting the next speaker. Default is "auto".\nCould be any of the following (case insensitive), will raise ValueError if not recognized:\n',(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:'"auto": the next speaker is selected automatically by LLM.'}),"\n",(0,a.jsx)(n.li,{children:'"manual": the next speaker is selected manually by user input.'}),"\n",(0,a.jsx)(n.li,{children:'"random": the next speaker is selected randomly.'}),"\n",(0,a.jsxs)(n.li,{children:['"round_robin": the next speaker is selected in a round robin fashion, i.e., iterating in the same order as provided in ',(0,a.jsx)(n.code,{children:"agents"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"allow_repeat_speaker: whether to allow the same speaker to speak consecutively. Default is True, in which case all speakers are allowed to speak consecutively. If allow_repeat_speaker is a list of Agents, then only those listed agents are allowed to repeat. If set to False, then no speakers are allowed to repeat."}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"agent_names",children:"agent_names"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"@property\ndef agent_names() -> List[str]\n"})}),"\n",(0,a.jsx)(n.p,{children:"Return the names of the agents in the group chat."}),"\n",(0,a.jsx)(n.h4,{id:"reset",children:"reset"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"def reset()\n"})}),"\n",(0,a.jsx)(n.p,{children:"Reset the group chat."}),"\n",(0,a.jsx)(n.h4,{id:"append",children:"append"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"def append(message: Dict, speaker: Agent)\n"})}),"\n",(0,a.jsx)(n.p,{children:"Append a message to the group chat.\nWe cast the content to str here so that it can be managed by text-based\nmodel."}),"\n",(0,a.jsx)(n.h4,{id:"agent_by_name",children:"agent_by_name"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"def agent_by_name(name: str) -> Agent\n"})}),"\n",(0,a.jsx)(n.p,{children:"Returns the agent with a given name."}),"\n",(0,a.jsx)(n.h4,{id:"next_agent",children:"next_agent"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"def next_agent(agent: Agent, agents: Optional[List[Agent]] = None) -> Agent\n"})}),"\n",(0,a.jsx)(n.p,{children:"Return the next agent in the list."}),"\n",(0,a.jsx)(n.h4,{id:"select_speaker_msg",children:"select_speaker_msg"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"def select_speaker_msg(agents: Optional[List[Agent]] = None) -> str\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Return the system message for selecting the next speaker. This is always the ",(0,a.jsx)(n.em,{children:"first"})," message in the context."]}),"\n",(0,a.jsx)(n.h4,{id:"select_speaker_prompt",children:"select_speaker_prompt"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"def select_speaker_prompt(agents: Optional[List[Agent]] = None) -> str\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Return the floating system prompt selecting the next speaker. This is always the ",(0,a.jsx)(n.em,{children:"last"})," message in the context."]}),"\n",(0,a.jsx)(n.h4,{id:"manual_select_speaker",children:"manual_select_speaker"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"def manual_select_speaker(\n        agents: Optional[List[Agent]] = None) -> Union[Agent, None]\n"})}),"\n",(0,a.jsx)(n.p,{children:"Manually select the next speaker."}),"\n",(0,a.jsx)(n.h4,{id:"select_speaker",children:"select_speaker"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"def select_speaker(last_speaker: Agent, selector: ConversableAgent)\n"})}),"\n",(0,a.jsx)(n.p,{children:"Select the next speaker."}),"\n",(0,a.jsx)(n.h4,{id:"a_select_speaker",children:"a_select_speaker"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"async def a_select_speaker(last_speaker: Agent, selector: ConversableAgent)\n"})}),"\n",(0,a.jsx)(n.p,{children:"Select the next speaker."}),"\n",(0,a.jsx)(n.h2,{id:"groupchatmanager-objects",children:"GroupChatManager Objects"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"class GroupChatManager(ConversableAgent)\n"})}),"\n",(0,a.jsx)(n.p,{children:"(In preview) A chat manager agent that can manage a group chat of multiple agents."}),"\n",(0,a.jsx)(n.h4,{id:"run_chat",children:"run_chat"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"def run_chat(messages: Optional[List[Dict]] = None,\n             sender: Optional[Agent] = None,\n             config: Optional[GroupChat] = None) -> Union[str, Dict, None]\n"})}),"\n",(0,a.jsx)(n.p,{children:"Run a group chat."}),"\n",(0,a.jsx)(n.h4,{id:"a_run_chat",children:"a_run_chat"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"async def a_run_chat(messages: Optional[List[Dict]] = None,\n                     sender: Optional[Agent] = None,\n                     config: Optional[GroupChat] = None)\n"})}),"\n",(0,a.jsx)(n.p,{children:"Run a group chat asynchronously."})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>l});var a=t(7294);const s={},r=a.createContext(s);function l(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);