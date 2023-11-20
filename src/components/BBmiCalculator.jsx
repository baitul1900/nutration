import { useState } from "react";
import { TextField, Button, InputAdornment } from "@mui/material";

const BBmiCalculator = () => {
  const [form, setForm] = useState({
    heightFeet: "",
    weight: "",
    heightInch: "",
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
    const { heightFeet, heightInch, weight } = form;
    const totalHeightInInches =
      parseInt(heightFeet) * 12 + parseInt(heightInch);
    const heightInMeters = totalHeightInInches * 0.0254;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
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
      heightFeet: "",
      weight: "",
      heightInch: "",
      bmi: "0",
      stage: "বিএমআই স্ট্যাটাস",
    });
  };

  return (
    <div className="card bmi-form ">
      <div className="card-body">
        <div className="card-title bmi-title">বিএমআই ক্যালকুলেটর </div>
        <hr style={{ color: "white" }} />

        <div className="row mb-2">
          <div className="col-4 align-self-center text-center">
            <label htmlFor="weight" className="">
              ওজন
            </label>
          </div>
          <div className="col-4 text-center">
            <TextField
              value={form.weight}
              onChange={(e) => inputOnChange("weight", e.target.value)}
              type="text"
              variant="outlined"
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <span style={{ color: "#FFFFFF", fontSize: "14px" }}>
                      কেজি
                    </span>
                  </InputAdornment>
                ),
              }}
              sx={{
                "& input": { color: "white" },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  { borderColor: "white" }, // Change border color on focus
                "& .MuiOutlinedInput-notchedOutline": { borderColor: "white" }, // Change border color
                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                  { borderColor: "white" }, // Change border color on hover
              }}
            />
          </div>
        </div>
        <div className="row justify-content-center mb-2 g-3">
          <div className="col-4 align-self-center text-center">
            <label htmlFor="Height" className="">
              উচ্চতা
            </label>
          </div>
          <div className="col-4">
            <TextField
              value={form.heightFeet}
              onChange={(e) => inputOnChange("heightFeet", e.target.value)}
              type="text"
              variant="outlined"
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <span style={{ color: "#FFFFFF", fontSize: "14px" }}>
                      ফুট
                    </span>
                  </InputAdornment>
                ),
              }}
              sx={{
                "& input": { color: "white" },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  { borderColor: "white" }, // Change border color on focus
                "& .MuiOutlinedInput-notchedOutline": { borderColor: "white" }, // Change border color
                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                  { borderColor: "white" }, // Change border color on hover
              }}
            />
          </div>
          <div className="col-4">
            <TextField
              value={form.heightInch}
              onChange={(e) => inputOnChange("heightInch", e.target.value)}
              type="text"
              variant="outlined"
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <span style={{ color: "#FFFFFF", fontSize: "14px" }}>
                      ইঞ্চি
                    </span>
                  </InputAdornment>
                ),
              }}
              sx={{
                "& input": { color: "white" },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  { borderColor: "white" }, // Change border color on focus
                "& .MuiOutlinedInput-notchedOutline": { borderColor: "white" }, // Change border color
                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                  { borderColor: "white" }, // Change border color on hover
              }}
            />
          </div>
        </div>

        <div className="row text-center mt-4 ">
          <div className="col-sm-12 col-md-4 col-lg-4 text-center">
            <Button
              variant=""
              className="calcu-bmi-btn"
              onClick={() => console.log(bmiCalculation())}
            >
              ক্যালকুলেটর
            </Button>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 pt-1 align-self-center">
            <p className="bmi-rate pt-2 pb-2">{form.bmi}</p>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4  text-center">
            <Button
              variant=""
              className="calcu-bmi-btn"
              onClick={() => console.log(handleReset())}
            >
              রিসেট
            </Button>
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-sm-12 col-md-3 col-lg-3 text-center align-self-center">
            <p className="bmi-is-eq">বিএমআই হলো : </p>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-3 text-center align-self-center">
            <p className="bmi-stage">({form.stage})</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BBmiCalculator;
