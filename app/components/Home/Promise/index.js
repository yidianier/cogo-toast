import cogoToast from 'cogo-toast';

import Paragraph from '../../../common-util/paragraph';
import CodePanel from '../../../common-util/code-panel';
import CodeBlock from '../../../common-util/code-block';
import Button from '../../../common-util/button';

import Section, { Group } from './styles';

const showToast = () => {
	cogoToast.loading('Loading your data...').then(() => {
		cogoToast.success('Data Successfully Loaded');
	});
};

const Types = () => (
	<CodePanel heading="Returns a Promise, With Useful Callbacks">
		<Section>
			<Group>
				<Paragraph>
					Returns a promise which resolves when the toast is about to hide.
				</Paragraph>
				<Paragraph>
					This can be useful to show another toast, or load another page based after the
					toast has completed showing.
				</Paragraph>
			</Group>
			<Group>
				<CodeBlock>
					<div>{`cogoToast.loading("Loading your data...").then(()=>{`}</div>
					<pre style={{ margin: 0 }}>
						{`    cogoToast.success("Data Successfully Loaded");`}
					</pre>
					<div>{`});`}</div>
				</CodeBlock>
				<Button className="primary" onClick={showToast}>
					Show Me
				</Button>
			</Group>
			<Group>
				<Paragraph>
					When hideAfter = 0, It returns a callback function instead of a promise, that
					hides the toast on execution
				</Paragraph>
			</Group>
		</Section>
	</CodePanel>
);

export default Types;
