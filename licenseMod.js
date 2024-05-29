// module for license Handle

function textofLicense(licenseName) {
        switch (licenseName) {
            case "MIT":                
                var licenseText = `The MIT License
                                THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
                                EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
                                OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
                                IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
                                DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
                                A RISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
                                DEALINGS IN THE SOFTWARE`
            break;
            case "Apache":
                var licenseText = `Apache License, Version 2.0
                                Licensed under the Apache License, Version 2.0 (the "License");
                                you may not use this file except in compliance with the License.
                                You may obtain a copy of the License at 
                                http://www.apache.org/licenses/LICENSE-2.0
                                Unless required by applicable law or agreed to in writing, software
                                distributed under the License is distributed on an "AS IS" BASIS,
                                WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                See the License for the specific language governing permissions and
                                limitations under the License.`
            break;
            case "BlueOak":
                var licenseText = `Blue Oak Model License ver 1.0.0
                                You must ensure that everyone who gets a copy of any part of this
                                software from you, with or without changes, also gets the text of this
                                license or a link to https://blueoakcouncil.org/license/1.0.0.
                                In order to receive this license, you must agree to its rules.
                                The rules of this license are both obligations under that agreement and conditions
                                to your license. You must not do anything with this software that triggers a rule
                                that you cannot or will not follow.`
            break;
            case "Mozilla":
                var licenseText = `Mozilla Public License 2.0
                                Covered Software is provided under this License on an “as is” basis,
                                without warranty of any kind, either expressed, implied, or statutory,
                                including, without limitation, warranties that the Covered Software is
                                free of defects, merchantable, fit for a particular purpose or non-infringing.
                                The entire risk as to the quality and performance of the Covered Software is
                                with You. Should any Covered Software prove defective in any respect,
                                You (not any Contributor) assume the cost of any necessary servicing, repair, 
                                or correction. This disclaimer of warranty constitutes an essential part of this 
                                License. No use of any Covered Software is authorized under this License except
                                under this disclaimer.`
            break;
         }
    return(licenseText);
    };

const exportAnswers = {textofLicense};
module.exports = exportAnswers;


