import React, {useState, useEffect} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import Checkbox from '@material-ui/core/Checkbox';
import CircularProgress from '@material-ui/core/CircularProgress';

const GreenRadio = withStyles({
    root: {
      color: blue[700],
      '&$checked': {
        color: blue[800],
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

  const GreenCheckbox = withStyles({
    root: {
      color: blue[700],
      '&$checked': {
        color: blue[800],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);


const Contact = () => {
    const [step, setStep] = useState(1);
    const [focus, setFocus] = useState(false);
    const [value, setValue] = React.useState('');
    const [help, setHelp] = useState('');
    const [description, setDescription] = useState('');
    const [start, setStart] = useState('');
    const [skill, setSkill] = useState([]);
    const [type, setType] = useState('');
    const [checked, setChecked] = useState([]);
    const [companyName, setCompanyName] = useState('');
    const [size, setSize] = useState('');
    const [projectName, setProjectName] = useState('');
    const [yourName, setYourName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    
    const skills = [
        "Mobile App",
        "Integration",
        "DevOps",
        "Web App",
        "Blockchain",
        "UX/UI",
        "DApp",
        "Data Engineering",
        "Code Review",
        "Backend",
        "CyberSecurity",
        "Other",
        "Frontend",
        "eCommerce",
        "Artificial Intelligence",
    ]

    const handleFocus = (e) => {
        setFocus(e.target.name);
    }

    const handleChange = (event) => {
      setValue(event.target.value);
    };
    const handleStepOneChange = (event) => {
      setHelp(event.target.value);
    };
    const handleStepTwoChange = (event) => {
        setDescription(event.target.value);
    };
    const handleStepThreeChange = (event) => {
        setStart(event.target.value);
    };
    const handleStepFourChange = (event) => {
      setType(event.target.value);
    };
    const handleStepFiveChange = (event) => {
        setCompanyName(event.target.value);
    };
    const handleStepSixChange = (event) => {
      setSize(event.target.value);
    };
    const handleStepSevenChange = (event) => {
        setProjectName(event.target.value);
    };
    const handleStepEightChange = (event) => {
        setYourName(event.target.value);
    };
    const handleStepNineChange = (event) => {
        setEmail(event.target.value);
    };
    const handleStepTenChange = (event) => {
        setPhone(event.target.value);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        let data = {
            yourName, 
            email, 
            phone, 
            help,
            description,
            start,
            skill,
            type,
            companyName,
            size,
            projectName
        }
        fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }).then((res) => {
            console.log('Response received')
            console.log(res);
            if (res.status === 200) {
              console.log('Response succeeded!')
              setSubmitted(true);
              setEmail('');
              setPhone('');
              setHelp('');
              setDescription('');
              setYourName('');
              setStart('');
              setSkill('');
              setType('');
              setCompanyName('');
              setSize('');
              setProjectName('');
              setLoading(false);
              setStep(0);
          } else {
              setLoading(false);
          }
        })
    }

    const handleUpdate = (index) => {
        let update = checked.find(x=> x.name === checked[index].name); 
        let list = checked.filter(x=> x.name !== checked[index].name); 
        update.checked = !update.checked
        let start = index;
        let deleteCount = 0;
        list.splice(start, deleteCount, update);
        // temporarychecked[index][whichvalue] = true;

        let list2 = list.filter(x => !!x.checked); 
        setSkill([...list2])
        setChecked([...list]);
      };

    const grabChecked = () => {
        const checked = skills.map(item => ({name: item, checked: false}))
        setChecked(checked);
    }

    const changeStep = (number) => {
        if (step === 6) {
            if (number > 0) {
                return;
            } else {
                setStep(step + number);
                return;
            }
        }
        setStep(step + number);
    }

    useEffect(() => {
        setStep(step - 1);
        grabChecked();
    }, [])

    const data = [
        {
            title: 'What do you need help with?',
            step: 1,
            content: 
                <div className="form-container">
                <FormControl component="fieldset">
                <RadioGroup aria-label="gender" name="gender1" value={help} onChange={handleStepOneChange} onFocus={handleFocus}>
                    <FormControlLabel value="New project" control={<GreenRadio />} label="New project" />
                    <FormControlLabel value="Current project that needs more developers" control={<GreenRadio />} label="Current project that needs more developers" />
                    <FormControlLabel value="Consultancy, code review, or debugging" control={<GreenRadio />} label="Consultancy, code review, or debugging" />
                    <FormControlLabel value="Something else" control={<GreenRadio />} label="Something else" />
                </RadioGroup>
                </FormControl>
                </div>
            
        },
        {
            title: 'Describe your requirements below',
            step: 2,
            content: 
            <div className="form-container">
                <div className="text-area-box">
                    <textarea 
                        style={{height: '100%', 
                            width: '100%', 
                            padding: '10px', 
                            fontSize: '16px'
                        }} 
                        placeholder="Example: I need to hire a senior Java developer for my existing team, OR I need a skilled development team to build a mobile app for the fashion industry."
                        value={description}
                        onFocus={handleFocus}
                        onChange={handleStepTwoChange}
                        />
                </div>
            </div>
            
            
        },
        {
            title: 'When do you need to start?',
            step: 3,
            content: 
                <div className="form-container">
                <FormControl component="fieldset">
                <RadioGroup aria-label="gender" name="gender1" value={start} onChange={handleStepThreeChange}>
                    <FormControlLabel value="As Soon As Possible" control={<GreenRadio />} label="As Soon As Possible" />
                    <FormControlLabel value="in 2-4 weeks" control={<GreenRadio />} label="in 2-4 weeks" />
                    <FormControlLabel value="No rush" control={<GreenRadio />} label="No rush" />
                </RadioGroup>
                </FormControl>
                </div>
            
        },
        {
            title: 'What skills do you require from your new developers?',
            step: 4,
            content: 
            <div className="form-container">
                <div className="skill-block">
                    {skills.map((item, index) => {
                        return (
                            <div key={index} className="skill-item">
                                <GreenCheckbox 
                                    checked={item.checked}
                                    onClick={(e) => handleUpdate(index)}
                                />
                                <p className="text-field-box">{item}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        },
        {
            title: 'What is your project type?',
            step: 5,
            content: 
            <div className="form-container">
            <FormControl component="fieldset">
            <RadioGroup aria-label="project-type" name="p1" value={type} onChange={handleStepFourChange}>
                <FormControlLabel value="I have a short-term project" control={<GreenRadio />} label="I have a short-term project" />
                <FormControlLabel value="I have a long-term project with the need for ongoing support" control={<GreenRadio />} label="I have a long-term project with the need for ongoing support" />
                <FormControlLabel value="I don't know yet" control={<GreenRadio />} label="I don't know yet" />
            </RadioGroup>
            </FormControl>
            </div>
        },
        {
            title: 'How big is your company?',
            step: 6,
            content: 
            <div className="form-container">
            <div className="text-field-7">
            <label>COMPANY NAME</label>
            <div className="text-box-6">
            <input type="text" required value={companyName} onFocus={handleFocus} onChange={handleStepFiveChange} style={{width: '105%', height: '105%', paddingLeft: '10px'}}/>
            </div>
            </div>
            <FormControl component="fieldset">
            <RadioGroup aria-label="project-type" name="p1" value={size} onChange={handleStepSixChange}>
                <FormControlLabel value="Less than 20" control={<GreenRadio />} label="Less than 20" />
                <FormControlLabel value="20-50" control={<GreenRadio />} label="20-50" />
                <FormControlLabel value="50-100" control={<GreenRadio />} label="50-100" />
                <FormControlLabel value="More than 100" control={<GreenRadio />} label="More than 100" />
            </RadioGroup>
            </FormControl>
            </div>
        },
        {
            title: 'Submit Your Request',
            step: 7,
            content: 
            <div className="form-container">
                <div className="page-7">
                    <div className="text-field-7">
                        <label>PROJECT NAME*</label>
                        <div className="text-box-7">
                            <input type="text" required value={projectName} onFocus={handleChange} onChange={handleStepSevenChange} style={{width: '105%', height: '105%', paddingLeft: '10px'}}/>
                        </div>
                    </div>
                    <div className="text-field-7">
                        <label>YOUR NAME*</label>
                        <div className="text-box-7">
                            <input type="text" required value={yourName} onFocus={handleChange} onChange={handleStepEightChange} style={{width: '105%', height: '105%', paddingLeft: '10px'}} />
                        </div>
                    </div>
                    <div className="text-field-7">
                        <label>EMAIL*</label>
                        <div className="text-box-7">
                            <input type="text" required value={email} onFocus={handleChange} onChange={handleStepNineChange} style={{width: '105%', height: '105%', paddingLeft: '10px'}} />
                        </div>
                    </div>
                    <div className="text-field-7">
                        <label>PHONE OR SKYPE</label>
                        <div className="text-box-7">
                            <input type="text" required value={phone} onFocus={handleChange} onChange={handleStepTenChange} style={{width: '105%', height: '105%', paddingLeft: '10px'}} />
                        </div>
                    </div>
                </div>
            </div>
        },
    ]

    return (
        <React.Fragment>
            <div className="contact-container">
                <div className="contact-inner-container">
                    {data.map((item, index) => {
                        return (
                            <div key={index}>
                            {step === index &&
                                <div className="contact-box">
                                    <h1>{item.title}</h1>
                                    <p className="step-counter">Step {item.step}/7</p>
                                    {item.content}
                                    <div className="move-buttons">
                                    <div className="inner-btns">
                                    {step > 0 &&
                                    <div className="button-container-c">
                                        <button className="back-btn" onClick={() => changeStep(-1)}>Back</button>
                                    </div>
                                    }
                                    <div className="button-container-c">
                                    {index === 6 ? 
                                        <button className="yellow-btn" onClick={(e) => handleSubmit(e)}>{loading ? <CircularProgress size={18}/> : 'Submit'}</button>
                                        :
                                        <button className="yellow-btn" onClick={() => changeStep(1)}>Next</button>
                                    }
                                    </div>
                                    </div>
                                    </div>
                                </div>
                            }
                            </div>
                        )
                    })}

                </div>
            </div>
        </React.Fragment>
    )
}

export default Contact