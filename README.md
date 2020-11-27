# Flypress Metafields

A [Vue.js](https://vuejs.org/) plugin for providing admin metafield and metainput helper components, designed for
use within the Flypress ecosystem.



## Installation

The Flypress Metafields plugin can be installed via npm:

```bash
npm install flypress-metafields
```



## Usage 

Include the required resources in your project:

```javascript
// admin.js

import Vue from 'vue';
import FlypressMetafields from 'flypress-metafields';

Vue.use(FlypressMetafields);

const AdminApp = new Vue({...});
```

```scss
// admin.scss

@import "flypress-metafields/src/styles/flypress-metafields";
```

```html
<metafield label="Icon">
    <metainput type="text" name="test_input" value="Hello, world."></metainput>
</metafield>
```



## Components



### `metafield`

The `metafield` component generates a styled form field row.

#### Properties

| Name        | Type     | Required | Description                                                    |
| ----------- | -------- | -------- | -------------------------------------------------------------- |
| label       | `string` |          | A label to display for the field.                              |
| description | `string` |          | Additional descriptor text to display below the field label.   |

#### Example

```html
<metafield label="Headline" description="Describe the content.">
    <input type="text" name="headline" value>
</metafield>
```



### `metainput`

The `metainput` component is used to quickly propegate form fields when generating custom meta forms in the admin. 

#### Properties

| Name  | Type     | Required | Description                      |
| ----- | -------- | -------- | -------------------------------- |
| name  | `string` | Yes      | Name attribute value.            |
| type  | `string` |          | Input type (see [Types](#Types)) |
| value | mixed    |          | Input value                      |



#### Types

##### Checkbox

##### Chooser

##### Color

##### Date

##### Editor

##### Email

##### Image

##### Media

##### Number

##### Radio

##### Range

##### Select

##### Tel

##### Textarea

##### Text

##### Time

##### Toggle

##### Url



#### Example

Coming soon.



