import eblog from './assets/blog.png';
import eyun from './assets/yun.png';
import eimage from './assets/image.png';
import efxb from './assets/logo_fxb.png';
import erjb from './assets/logo_rjb.png';
import enjtech from './assets/logo_njtech.png';

import dHome from './assets/d_home.svg';
import dSkills from './assets/d_skills.svg';
import dExp from './assets/d_exp.svg';
import dWorks from './assets/d_works.svg';
import dContact from './assets/d_contact.svg';
import sGithub from './assets/s_github.svg';
//import sSf from './assets/s_sf.svg';
import sBlog from './assets/s_blog.svg';
import sZh from './assets/s_zh.svg';
//import sJj from './assets/s_Jj.svg';
//import wJm from './assets/w_jm.jpg';
//import wLs from './assets/w_ls.jpg';

//import SCSDN from "./assets/s_csdn.svg";
//import SGitee from "./assets/s_gitee.svg";

export default {
  cn: {
    header: {
      langList: ['中', '英'],
      titleList: [
        {
          svg: dHome,
          title: '首页'
        },
        {
          svg: dSkills,
          title: '能力'
        },
        {
          svg: dExp,
          title: '经历'
        },
        {
          svg: dWorks,
          title: '作品集'
        },
        {
          svg: dContact,
          title: '联系我'
        }
      ]
    },
    footer: ['Released under the MIT License', 'All Rights Reserved ', 'Copyright © 2020 熙七'],
    overview: {
      infoList: ['21岁', '本科', '南京', '学生'],
      quote: '没有未来的未来，不是我想要的未来。',
      desList: ['我叫孙忠','计算机科学与技术专业学生', '就读于南京工业大学', '670801872@qq.com']
    },
    skill: {
      outCircleList: [
        {
          bg: {
            backgroundColor: 'rgba(121,100,102,0.8)'
          },
          name: 'C++'
        },
        {
          bg: {
            backgroundColor: 'rgba(49,65,82,0.8)'
          },
          name: 'python'
        },
        {
          bg: {
            backgroundColor: 'rgba(76,157,160,0.8)'
          },
          name: 'matlab'
        },
        {
          bg: {
            backgroundColor: 'rgba(66,66,66,0.8)'
          },
          name: 'AI'
        },
        {
          bg: {
            backgroundColor: 'rgba(193,131,106,0.8)'
          },
          name: '机器学习'
        },
        {
          bg: {
            backgroundColor: 'rgba(117,148,179,0.8)'
          },
          name: 'nodejs'
        },
        {
          bg: {
            backgroundColor: 'rgba(71,83,94,0.8)'
          },
          name: 'Algorithm'
        },
        {
          bg: {
            backgroundColor: 'rgba(147,147,189,0.8)'
          },
          name: '数据库'
        }
      ],
      innerCircleList: [
        {
          bg: {
            backgroundColor: 'rgba(179,164,140,0.8)'
          },
          name: 'hexo'
        },
        {
          bg: {
            backgroundColor: 'rgba(171,209,220,0.8)'
          },
          name: 'vue'
        },
        {
          bg: {
            backgroundColor: 'rgba(238,215,163,0.8)'
          },
          name: 'neo4j'
        },
        {
          bg: {
            backgroundColor: 'rgba(207,184,178,0.8)'
          },
          name: 'KG'
        }
      ],
      desList: [
        '擅长Ai、Fw、Fl、Br、Ae、Pr、Id、Ps等软件的安装与卸载 ;',
        '熟悉Windows、Linux、 Mac、Android、IOS、等系统的开关机 ;',
        '精通C、C++、C#、Java、Javascript、CSS、python、PHP等单词的拼写。'
      ]
    },
    exp: {
      expList: [
        {
          title: '南京工业大学',
          time: '2020年1月~至今',
          post: '计算机专业学生',
          img: {
            backgroundImage: `url(${enjtech})`
          },
          contentList: ['购买个人的阿里云服务器', '搭建个人的第一个博客', '开始用博客记录自己的学习生活', '建立自己的个人网页简历']
        },
        {
          title: '发现杯',
          time: '2020年1月~2020年3月',
          post: '计算机专业学生',
          img: {
            backgroundImage: `url(${efxb})`
          },
          contentList: ['参加发现杯比赛', '开始接触知识图谱', '负责构建医疗知识图谱', '知识图谱可视化与问答']
        },
        {
          title: '中国软件杯',
          time: '2019年3月~2019年6月',
          post: '计算机专业学生',
          img: {
            backgroundImage: `url(${erjb})`
          },
          contentList: ['开始学习机器学习的内容', '参与中国软件杯的比赛', '负责构建人群检测的模板', '进行数据库与前端的交互']
        }
      ]
    },
    works: {
      worksList: [
        {
          title: '个人博客网站',
          des:
            '熙七的个人博客,利用hexo框架搭建，matery主题',
          url: 'https://blog.szly.world/',
          img: {
            src: `${eblog}`
          }
        },
        {
          title: '个人图床',
          des: '简易的个人云图床,依赖chevereto,足以应付个人图片的分类收藏',
          url: 'https://img.szly.world/',
          img:{
            src: `${eimage}`
          }
        },
        {
          title: '个人网盘',
          des: '简易的个人网盘,依赖于Cloudreve,用以保存个人文件，便于下载',
          url: 'https://yun.szly.world/',
          img:{
            src: `${eyun}`
          }
        }
      ],
      viewMore: 'github上面查看更多'
    },
    contact: {
      title: '联系我',
      desList1: ['灵感', '代码', '梦想', '未来'],
      desList2: ['注重效率，偏爱敏捷开发', '喜欢尝试，期待新鲜事物', '编程即兴趣，兴趣即未来', '行路有良友，便是捷径', '带上我吧，一起看到更大的世界'],
      download: '下载简历',
      fileList: [
        {
          title: 'HTML版',
          url: 'www.baidu.com'
        },
        {
          title: 'PDF版',
          url: 'www.baidu.com'
        }
      ],
      typeList: [
        {
          icon: sGithub,
          url: 'https://github.com/xiqisz'
        },
        {
          icon: sBlog,
          url: 'https://blog.szly.world'
        },
        {
          icon: sZh,
          url: 'https://www.zhihu.com/people/deng-ni-74-16'
        }
      ]
    }
  },
  en: {
    header: {
      langList: ['CN', 'EN'],
      titleList: [
        {
          svg: dHome,
          title: 'home'
        },
        {
          svg: dSkills,
          title: 'skills'
        },
        {
          svg: dExp,
          title: 'exp'
        },
        {
          svg: dWorks,
          title: 'works'
        },
        {
          svg: dContact,
          title: 'contact'
        }
      ]
    },
    footer: ['Released under the MIT License', 'All Rights Reserved ', 'Copyright © 2020 熙七'],
    overview: {
      infoList: ['21years', 'B.S.', 'NanJing', 'Student'],
      quote: 'A future without a future, not the future I want.',
      desList: ['I am Zhong Sun','Computer science and technology students', 'Studied in nanjing university of technology', '670801872@qq.com']
    },
    skill: {
      outCircleList: [
        {
          bg: {
            backgroundColor: 'rgba(121,100,102,0.8)'
          },
          name: 'C++'
        },
        {
          bg: {
            backgroundColor: 'rgba(49,65,82,0.8)'
          },
          name: 'python'
        },
        {
          bg: {
            backgroundColor: 'rgba(76,157,160,0.8)'
          },
          name: 'matlab'
        },
        {
          bg: {
            backgroundColor: 'rgba(66,66,66,0.8)'
          },
          name: 'AI'
        },
        {
          bg: {
            backgroundColor: 'rgba(193,131,106,0.8)'
          },
          name: 'Machine learning'
        },
        {
          bg: {
            backgroundColor: 'rgba(117,148,179,0.8)'
          },
          name: 'nodejs'
        },
        {
          bg: {
            backgroundColor: 'rgba(71,83,94,0.8)'
          },
          name: 'Algorithm'
        },
        {
          bg: {
            backgroundColor: 'rgba(147,147,189,0.8)'
          },
          name: 'Database'
        }
      ],
      innerCircleList: [
        {
          bg: {
            backgroundColor: 'rgba(179,164,140,0.8)'
          },
          name: 'hexo'
        },
        {
          bg: {
            backgroundColor: 'rgba(171,209,220,0.8)'
          },
          name: 'vue'
        },
        {
          bg: {
            backgroundColor: 'rgba(238,215,163,0.8)'
          },
          name: 'neo4j'
        },
        {
          bg: {
            backgroundColor: 'rgba(207,184,178,0.8)'
          },
          name: 'KG'
        }
      ],
      desList: [
        'be good at Ai, Fw, Fl, Br, Ae, Pr, Id, Ps and other software installation and uninstallation',
        'familiar with switching on and off the system like Windows、Linux、 Mac、Android、IOS .. ',
        'Proficient in the spelling of C, C++, C#, Java, Javascript, CSS, python, PHP ..'
      ]
    },
    exp: {
      expList: [
        {
          title: 'Nanjing Tech University',
          time: '2020.01~now',
          post: 'Student',
          img: {
            backgroundImage: `url(${enjtech})`
          },
          contentList: [
            'Buy a personal aliyun server',
            'Build my first blog',
            'began to blog about my study life',
            'Create my own web page resume'
          ]
        },
        {
          title: 'Find Cup',
          time: '2020.01~2020.03',
          post: 'Student',
          img: {
            backgroundImage: `url(${efxb})`
          },
          contentList: [
            'Participate in the discovery cup competition',
            'begin to touch the knowledge graph',
            'responsible for constructing the medical knowledge graph',
            'knowledge graph visualization and q&a'
          ]
        },
        {
          title: 'China software cup',
          time: '2019.03~2019.06',
          post: 'Student',
          img: {
            backgroundImage: `url(${erjb})`
          },
          contentList: [
            'start learning the content of machine learning',
            'participate in the China software cup competition',
            'build the template of crowd detection', 
            'interact with database and front-end'
          ]
        }
      ]
    },
    works: {
      worksList: [
        {
          title: '个人博客网站',
          des:
            '熙七的个人博客,利用hexo框架搭建，matery主题',
          url: 'https://blog.szly.world/',
          img: {
            src: `${eblog}`
          }
        },
        {
          title: '个人图床',
          des: '简易的个人云图床,依赖chevereto,足以应付个人图片的分类收藏',
          url: 'https://img.szly.world/',
          img:{
            src: `${eimage}`
          }
        },
        {
          title: '个人网盘',
          des: '简易的个人网盘,依赖于Cloudreve,用以保存个人文件，便于下载',
          url: 'https://yun.szly.world/',
          img:{
            src: `${eyun}`
          }
        }
      ],
      viewMore: 'Go to github see more'
    },
    contact: {
      title: 'Contact Me',
      desList1: ['INSPIRATION', 'CODE', 'DREAM', 'FUTURE'],
      desList2: [
        'Focus on efficiency, preference for agile development',
        'Like to try, look forward to something new',
        'Programming is interested, interest is the future',
        'Line road friends, is a shortcut',
        'With me, see the bigger world together'
      ],
      download: 'Download Resume',
      fileList: [
        {
          title: 'HTML',
          url: 'www.baidu.com'
        },
        {
          title: 'PDF',
          url: 'www.baidu.com'
        }
      ],
      typeList: [
        {
          icon: sGithub,
          url: 'https://github.com/xiqisz'
        },
        {
          icon: sBlog,
          url: 'https://blog.szly.world'
        },
        {
          icon: sZh,
          url: 'https://www.zhihu.com/people/deng-ni-74-16'
        }
      ]
    }
  }
};
