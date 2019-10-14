function mySettings(props) {
  return (
    <Page>
      <Section
        title={
          <Text bold align="center">
            Fitbit Settings Examples
          </Text>
        }
      >
        <Toggle settingsKey="toggle" label="Toggle Switch" />
        <ColorSelect
          centered={true}
          settingsKey="color"
          colors={[
            { color: "tomato" },
            { color: "sandybrown" },
            { color: "gold" },
            { color: "aquamarine" },
            { color: "deepskyblue" },
            { color: "white" }
          ]}
        />
      </Section>
      <Section>
        <Text>
          This is a basic demo settings page to display some of the current
          capabilities of the Companion Settings library.
        </Text>
        <Text align="center" bold>
          Formatting Examples
        </Text>
        <Text italic>This text is italicized.</Text>
        <Text align="right">This text will align to the right side</Text>
        <Text align="center">
          This text will be centered and <Text bold>bold</Text>
        </Text>
      </Section>
        <Text>Slider Settings: {props.settingsStorage.getItem('Slider')}
        </Text>
       <Slider label="Slider Example" 
          settingsKey="sliderValue" 
          min="0" 
          max="60"
          step="10"
          onChange={value => props.settingsStorage.setItem('Slider', value)} />
      <TextInput label="Text Example" settingsKey="text" />
      <TextInput
        label="Text Example"
        title="Text Input"
        settingsKey="textInput"
        disabled={!(props.settings.toggleTextInput === "true")}
      />
      <Button
        list
        label="Clear Settings Storage"
        onClick={() => props.settingsStorage.clear()}
      />
      <TextInput label="Text Example" settingsKey="text" />
      <TextInput
        label="Text Example"
        title="Text Input"
        settingsKey="textInput"
        disabled={!(props.settings.toggleTextInput === "true")}
      />
      <Toggle label="Enable Text Input" settingsKey="toggleTextInput" />
      <TextInput
        title="Add List Item Example"
        label="Item Name"
        placeholder="Type something"
        action="Add Item"
        onAutocomplete={value => {
          const autoValues = [
            { name: "red", value: "1" },
            { name: "orange", value: "2" },
            { name: "yellow", value: "3" },
            { name: "green", value: "4" },
            { name: "blue", value: "5" },
            { name: "purple", value: "6" }
          ];
          return autoValues.filter(option => option.name.startsWith(value));
        }}
      />
      <Select
        label={`Selection Example`}
        settingsKey="selection"
        options={[{ name: "One" }, { name: "Two" }, { name: "Three" }]}
      />
      <Select
        label={`Multi-Selection Example`}
        multiple
        settingsKey="multiselection"
        options={[
          { name: "One", value: "1" },
          { name: "Two", value: "2" },
          { name: "Three", value: "3" },
          { name: "Four", value: "4" },
          { name: "Five", value: "5" },
          { name: "Six", value: "6" },
          { name: "Seven", value: "7" },
          { name: "Eight", value: "8" },
          { name: "Nine", value: "9" },
          { name: "Ten", value: "10" },
          { name: "Eleven", value: "11" },
          { name: "Twelve", value: "12" },
          { name: "Thirteen", value: "13" },
          { name: "Fourteen", value: "14" },
          { name: "Fifteen", value: "15" }
        ]}
      />
      <AdditiveList
        settingsKey="additive"
        addAction={
          <Select
            label="Add Item Additive List"
            options={[
              { name: "Label1" },
              { name: "Label2" },
              { name: "Label3" },
              { name: "Label4" },
              { name: "Label5" }
            ]}
          />
        }
      />
      <ImagePicker
        title="Image Picker"
        description="Pick an image to use in this App."
        label="Pick an Image"
        sublabel="Settings image picker"
        imageWidth="300"
        imageHeight="300"
        onImagePicked={({ image, imageSize }) =>
          doSomethingWithImage(image, imageSize)
        }
      />
       <Section
        title={<Text bold align="center">Flash-Face</Text>}>
         <Link source="https://github.com/princessleia1">
           <TextImageRow
             label="Github"
             sublabel="https://github.com/princessleia1"
             icon="https://github.com/princessleia1/flash-face/blob/master/resources/git-icon.png?raw=true"
           />
          </Link>
        <Link source="https://www.paypal.me/KirsteneG">
          <TextImageRow
            label="PayPal"
            sublabel="paypal.me/KirsteneG"
            icon="https://github.com/princessleia1/flash-face/blob/master/resources/pay-icon.png?raw=true"
           />
        </Link>
      </Section>
      <Section
        title={<Text bold align="center">Build Version</Text>}>
        <Text>
          1.0.1 - Initial Pre-Release.
        </Text>
      </Section>
    </Page>
  );
}

registerSettingsPage(mySettings);