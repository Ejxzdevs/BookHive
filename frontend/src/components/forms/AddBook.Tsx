import { useState } from "react";
import { Button, TextField, Typography, Box } from "@mui/material";
import { useForm } from "react-hook-form";

const AddBook = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Typography variant="h4" color="primary" gutterBottom>
        Add a New Book
      </Typography>

      {/* Form Component */}
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ width: '100%', maxWidth: 400, margin: '0 auto' }}>
        <TextField
          fullWidth
          label="First Name"
          variant="outlined"
          margin="normal"
          {...register("firstName", { required: "First name is required" })}
          error={!!errors.firstName}
          helperText={errors.firstName ? errors.firstName.message : ""}
        />
        <TextField
          fullWidth
          label="Last Name"
          variant="outlined"
          margin="normal"
          {...register("lastName", { required: "Last name is required" })}
          error={!!errors.lastName}
          helperText={errors.lastName ? errors.lastName.message : ""}
        />

        <Button type="submit" color="primary" variant="contained" sx={{ marginTop: 2 }}>
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default AddBook;
