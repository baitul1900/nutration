import { useState } from "react";
import { TextField, Button, InputAdornment } from "@mui/material";

const BBmiCalculator = () => {
  const [form, setForm] = useState({
    height: "",
    weight: "",
    age: "",
    bmi: "0",
    stage: "বিএমআই স্ট্যাটাস",
  });

  const inputOnChange = (key, value) => {
    setForm((prevObj) => ({
      ...prevObj,
      [key]: value,
    }));
  };



  const bmiCalculation = () => {
    let heightInMeters = parseFloat(form.height / 100).toFixed(2);
    let bmi = parseFloat(
      form.weight / (heightInMeters * heightInMeters)
    ).toFixed(2);
    setForm((prevObj) => ({
      ...prevObj,
      bmi: bmi,
    }));
    determineNutritionalStage(bmi);
  };

  const determineNutritionalStage = (bmi) => {
    // Logic to determine the nutritional stage based on BMI
    if (bmi < 18.5) {
      setForm((prevObj) => ({
        ...prevObj,
        stage: "অপুষ্টি",
      }));
    } else if (bmi >= 18.5 && bmi < 25) {
      setForm((prevObj) => ({
        ...prevObj,
        stage: "পুষ্টি ",
      }));
    } else if (bmi >= 25 && bmi < 100) {
      setForm((prevObj) => ({
        ...prevObj,
        stage: "অতিপুষ্টি",
      }));
    } else {
      setForm((prevObj) => ({
        ...prevObj,
        stage: "সঠিক তথ্য দিন",
      }));
    }
  };

  const handleReset = () => {
    setForm({
      height: "",
      weight: "",
      age: "",
      bmi: "0",
      stage: "",
    });
  };

  return (
    <div className="card bmi-form ">
      <div className="card-body">
        <div className="card-title bmi-title">বিএমআই ক্যালকুলেটর </div>
        <hr style={{color : 'white'}} />
        <div className="row justify-content-center mb-2">
          <div className="col-auto align-self-center">
            <label htmlFor="Height">উচ্চতা=</label>
          </div>
          <div className="col-3">
            <TextField
              value={form.height}
              onChange={(e) => inputOnChange("height", e.target.value)}
              type="text"
              variant="outlined"
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end"><span style={{ color: '#FFFFFF', fontSize: '14px'}}>সে.মি.</span></InputAdornment>
                ),
              }}
              sx={{
                '& input': { color: 'white' },
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'white' }, // Change border color on focus
                '& .MuiOutlinedInput-notchedOutline': { borderColor: 'white' }, // Change border color
                '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: 'white' }, // Change border color on hover
            }}
            />
          </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-auto align-self-center">
              <label htmlFor="weight">ওজন =</label>
            </div>
            <div className="col-3">
              <TextField
                value={form.weight}
                onChange={(e) => inputOnChange("weight", e.target.value)}
                type="text"
                variant="outlined"
                size="small"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end"><span style={{ color: '#FFFFFF', fontSize : "14px"}}>কেজি</span></InputAdornment>
                  ),
                  
                  
                }}
                sx={{
                    '& input': { color: 'white' },
                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'white' }, // Change border color on focus
                    '& .MuiOutlinedInput-notchedOutline': { borderColor: 'white' }, // Change border color
                    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: 'white' }, // Change border color on hover
                }}
              />
            </div>
          </div>
          <div className="row justify-content-center mt-2">
            <div className="col-auto align-self-center">
              <label htmlFor="age">বয়স = &nbsp;</label>
            </div>
            <div className="col-3">
              <TextField
                value={form.age}
                onChange={(e) => inputOnChange("age", e.target.value)}
                type="text"
                variant="outlined"
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
                sx={{
                  '& input': { color: 'white' },
                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'white' }, // Change border color on focus
                    '& .MuiOutlinedInput-notchedOutline': { borderColor: 'white' }, // Change border color
                    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: 'white' }, // Change border color on hover
                }}
              />
            </div>
          </div>

          <div className="row text-center mt-4 ">
            <div className="col-12 text-center">
                <Button variant="" className="calcu-bmi-btn" onClick={() => console.log(bmiCalculation())}>
                  ক্যালকুলেটর
                </Button>
            </div>
            <div className="col-12 pt-1 text-center">
                <Button variant="" className="calcu-bmi-btn" onClick={() => console.log(handleReset())}>
                  রিসেট
                </Button>
            </div>
          </div>

          <div className="row justify-content-center mt-4 ">
            <div className="col-4 text-center align-self-center">
                <p className="bmi-is-eq">বিএমআই হলো : </p>
            </div>
            <div className="col-4 text-center  align-self-center">
                <p className="bmi-rate pt-2 pb-2">{form.bmi}</p>
            </div>
            <div className="col-4 text-center align-self-center">
                <p className="bmi-stage">({form.stage})</p>
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default BBmiCalculator;
