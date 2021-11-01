import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { Box, Button, Flex, Text } from "rebass";
import { POST_DATA } from "../../../Constants/ActionTypes";
import UserService from "../../../Service/UserService";
import InputText from "../../InputText";

const PageViewOne = (props) => {
  // const [fromDataState, setFromDataState] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   contactNumber: "",
  // });

  const {
    register,
    handleSubmit,
    setError,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(errors, watch);
    if (data) {
      await UserService.postUserData(data)
        .then((res) => {
          if (res?.data) {
            debugger;
            props.postData(res?.data);
            reset();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      [
        {
          type: "manual",
          name: "firstName",
          message: "Name should be alphabetic only.",
        },
        {
          type: "manual",
          name: "lastName",
          message: "Last name is required",
        },
        {
          type: "manual",
          name: "email",
          message: "Last name is required",
        },
        {
          type: "manual",
          name: "contactNo",
          message: "Last name is required",
        },
      ].forEach(({ name, type, message }) => setError(name, { type, message }));
    }
  };

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <h1>User Details</h1>

      <Flex
        flexDirection={"column"}
        sx={{
          width: "100%",
          padding: "1rem",
          margin: "auto",
          "@media screen and (min-width:720px)": {
            width: "50%",
          },
        }}
      >
        <Box as="form" onSubmit={handleSubmit(onSubmit)}>
          <div
            style={{
              width: "100%",
            }}
          >
            <InputText
              labelName={"First Name"}
              placeholder="Enter Name"
              register={{
                ...register("firstName", {
                  required: true,
                  pattern: /^[A-Za-z]+$/i,
                  maxLength: 20,
                }),
              }}
            />
            <Text
              sx={{
                fontSize: 10,
                textAlign: "start",
                color: "red",
              }}
            >
              {errors?.firstName && "First name is required"}
            </Text>
            <InputText
              labelName={"Last Name"}
              placeholder="Enter Last Name"
              register={{
                ...register("lastName", {
                  required: true,
                  pattern: /^[A-Za-z]+$/i,
                  maxLength: 20,
                }),
              }}
            />
            <Text
              sx={{
                fontSize: 10,
                textAlign: "start",
                color: "red",
              }}
            >
              {errors?.lastName && "Last name is required"}
            </Text>
            <InputText
              labelName={"Email Add."}
              placeholder="Enter Email"
              register={{
                ...register("email", {
                  required: true,
                  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                }),
              }}
            />
            <Text
              sx={{
                fontSize: 10,
                textAlign: "start",
                color: "red",
              }}
            >
              {errors?.email && "Email is required. i.e. xyz@abc.com"}
            </Text>
            <InputText
              labelName={"Contact No."}
              placeholder="Enter Contact no."
              register={{
                ...register("contactNo", {
                  required: true,
                  pattern: /(7|8|9)\d{9}/,
                  maxLength: 12,
                }),
              }}
            />
            <Text
              sx={{
                fontSize: 10,
                textAlign: "start",
                color: "red",
              }}
            >
              {errors?.contactNo && "contact No. is required. i.e 98********"}
            </Text>
          </div>

          <Button
            alignItems="center"
            width={"100%"}
            sx={{
              cursor: "pointer",
              backgroundColor: "#bababa",
              color: "white",
              marginTop: "2rem",
              ":hover": {
                backgroundColor: "black",
              },
              ":focus": {
                backgroundColor: "black",
              },
            }}
          >
            Submit{" "}
          </Button>
        </Box>
      </Flex>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    postData: (data) => dispatch({ type: POST_DATA, payload: data }),
  };
};

const mapStateToProps = (state) => {
  return { userData: state };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageViewOne);
